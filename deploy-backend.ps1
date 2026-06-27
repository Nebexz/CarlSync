# CareSync Backend Deployer Script
# Run this script in PowerShell to deploy the local backend changes to your Supabase project.

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "     CareSync Backend Deployment Helper      " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# 1. Check if Supabase CLI is installed
$supabaseCheck = Get-Command supabase -ErrorAction SilentlyContinue
if (-not $supabaseCheck) {
    Write-Host "Supabase CLI is not installed on your system." -ForegroundColor Yellow
    Write-Host "Installing Supabase CLI globally via npm..." -ForegroundColor Gray
    npm install -g supabase
    if (-not (Get-Command supabase -ErrorAction SilentlyContinue)) {
        Write-Host "Installation failed. Please make sure Node.js and npm are installed on your computer." -ForegroundColor Red
        Exit
    }
    Write-Host "Supabase CLI installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✓ Supabase CLI detected." -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 2: Authenticate with Supabase" -ForegroundColor Cyan
Write-Host "----------------------------------" -ForegroundColor Gray
Write-Host "To deploy your changes, you need a Supabase Access Token." -ForegroundColor White
Write-Host "1. Go to: https://supabase.com/dashboard/account/tokens" -ForegroundColor White
Write-Host "2. Generate a new token (e.g. name it 'CareSync CLI')" -ForegroundColor White
Write-Host "3. Copy the token." -ForegroundColor White
Write-Host ""

$token = Read-Host "Paste your Supabase Access Token here"
$token = $token.Trim()

if (-not $token) {
    Write-Host "Error: Access token cannot be empty." -ForegroundColor Red
    Exit
}

# Set the access token environment variable for this session
$env:SUPABASE_ACCESS_TOKEN = $token

Write-Host ""
Write-Host "Step 3: Deploying Edge Function..." -ForegroundColor Cyan
Write-Host "----------------------------------" -ForegroundColor Gray

# Run the supabase deploy command
supabase functions deploy make-server-00f33061 --project-ref atnotdmrkjacqrbjpkbn

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=============================================" -ForegroundColor Green
    Write-Host "  Success! Your backend is deployed live!    " -ForegroundColor Green
    Write-Host "=============================================" -ForegroundColor Green
    Write-Host "Now refresh your CareSync web app, open settings, and you will see the 6-character code." -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Deployment failed. Please check the error message above." -ForegroundColor Red
}

# Pause to let the user see the result
Read-Host "Press Enter to exit"
