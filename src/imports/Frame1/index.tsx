function SidebarWrapper() {
  return <div className="bg-[#1c2b3a] h-[172px] relative shrink-0 w-[232px]" data-name="_sidebar-wrapper" />;
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <SidebarWrapper />
    </div>
  );
}