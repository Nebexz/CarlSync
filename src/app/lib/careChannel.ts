/**
 * careChannel — singleton Supabase Realtime channel manager.
 *
 * Keeps exactly one subscribed channel per patient so that
 * broadcast send() always runs over WebSocket (no REST fallback).
 *
 * Usage:
 *   // Subscribe (returns an unsubscribe fn — call it in useEffect cleanup)
 *   const unsub = careChannel.subscribe(patientId, (payload) => { ... });
 *
 *   // Broadcast from anywhere — channel is already subscribed
 *   careChannel.broadcast(patientId, { msg: 'Medication marked taken' });
 */

import { supabase } from './supabase';

type Handler = (payload: any) => void;

class CareChannelManager {
  private channels = new Map<string, any>();
  private listenerSets = new Map<string, Set<Handler>>();

  subscribe(patientId: string, handler: Handler): () => void {
    if (!this.listenerSets.has(patientId)) {
      this.listenerSets.set(patientId, new Set());
    }
    this.listenerSets.get(patientId)!.add(handler);
    this.ensureChannel(patientId);

    return () => {
      this.listenerSets.get(patientId)?.delete(handler);
      if ((this.listenerSets.get(patientId)?.size ?? 0) === 0) {
        this.teardown(patientId);
      }
    };
  }

  broadcast(patientId: string, payload: Record<string, any> = {}) {
    this.ensureChannel(patientId);
    this.channels.get(patientId)?.send({
      type: 'broadcast',
      event: 'update',
      payload,
    });
  }

  private ensureChannel(patientId: string) {
    if (this.channels.has(patientId)) return;

    const ch = supabase
      .channel(`care:${patientId}`)
      .on('broadcast', { event: 'update' }, (payload: any) => {
        this.listenerSets.get(patientId)?.forEach(fn => fn(payload));
      })
      .subscribe();

    this.channels.set(patientId, ch);
  }

  private teardown(patientId: string) {
    const ch = this.channels.get(patientId);
    if (ch) {
      supabase.removeChannel(ch);
      this.channels.delete(patientId);
      this.listenerSets.delete(patientId);
    }
  }
}

export const careChannel = new CareChannelManager();
