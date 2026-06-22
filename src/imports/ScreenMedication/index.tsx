import svgPaths from "./svg-2z3l1yh53a";

function HeartCrack() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="heart-crack">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="heart-crack">
          <path d={svgPaths.p3ed03a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <HeartCrack />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#10b981] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="nav-list">
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=home">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-5%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                <path d={svgPaths.p3d24d480} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[8.33%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-10%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
                <path d="M1 11V1H7V11" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Home</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=user">
          <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-16.67%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Patient Profile</p>
      </div>
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=pill">
          <div className="absolute inset-[8.39%]" data-name="Vector">
            <div className="absolute inset-[-5.01%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9707 21.9707">
                <path d={svgPaths.p3343f880} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[35.42%]" data-name="Vector">
            <div className="absolute inset-[-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                <path d="M1 1L8 8" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Medication</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=square-check">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
            <div className="absolute inset-[-25%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
                <path d="M1 3L3 5L7 1" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Tasks</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=calendar">
          <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-25%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-25%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-1px_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
                <path d="M1 1H19" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Calendar</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=activity">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                <path d="M21 10H17L14 19L8 1L5 10H1" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Timeline</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=triangle-alert">
          <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
            <div className="absolute inset-[-5.55%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
                <path d={svgPaths.p2d23b080} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
            <div className="absolute inset-[-25%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
            <div className="absolute inset-[-1px_-9999.77%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Emergency</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=settings">
          <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
            <div className="absolute inset-[-5%_-5.54%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0352 22">
                <path d={svgPaths.p2eb1aa00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[37.5%]" data-name="Vector">
            <div className="absolute inset-[-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Settings</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] py-[32px] relative size-full">
        <Logo />
        <NavList />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.p3f6e0f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Search />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Search medications...</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="plus">
          <path d={svgPaths.p22a98e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Plus />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0d9488] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <IconWrapper2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add Medication</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Medication Management</p>
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start leading-[20px] not-italic px-[24px] py-[16px] relative size-full text-[#94a3b8] text-[14px]">
        <p className="flex-[1_0_0] min-w-px relative">MEDICATION NAME</p>
        <p className="relative shrink-0 w-[120px]">DOSAGE</p>
        <p className="relative shrink-0 w-[140px]">FREQUENCY</p>
        <p className="relative shrink-0 w-[160px]">PRESCRIBER</p>
        <p className="relative shrink-0 w-[120px]">STATUS</p>
      </div>
    </div>
  );
}

function Pill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1610)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1610">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame8 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Metformin</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#166534] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame10 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame7 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">500mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">2x Daily</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Aris</p>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Pill1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1610)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1610">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame13 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Lisinopril</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#166534] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame12 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">10mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">1x Daily</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Aris</p>
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Pill2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1610)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1610">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Atorvastatin</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#166534] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame17 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">20mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">Nightly</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Aris</p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Pill3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1610)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1610">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper6 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame23 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Amoxicillin</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#92400e] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">COMPLETED</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame25 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame22 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">250mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">3x Daily</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Miller</p>
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <Frame11 />
      <Frame16 />
      <Frame21 />
    </div>
  );
}

function MedicationList() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="medication-list">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame4 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <ChevronLeft />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <ChevronRight />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <IconWrapper7 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Oct 23 - Oct 29</p>
      <IconWrapper8 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Weekly Schedule</p>
      <Frame29 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">23</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Mon</p>
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">24</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Tue</p>
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">25</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d9488] text-[12px] whitespace-nowrap">Wed</p>
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[8px] relative size-full text-[11px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d9488] w-full">08:00 AM</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0f172a] w-full">Metformin</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[8px] relative size-full text-[11px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#92400e] w-[min-content]">12:30 PM</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0f172a] whitespace-nowrap">Lisinopril</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#fafafa] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-h-[inherit] p-[8px] relative size-full">
        <Frame43 />
        <Frame44 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame40 />
      <Frame42 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">26</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Thu</p>
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame46 />
      <Frame48 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">27</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Fri</p>
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">28</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Sat</p>
      <Frame55 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">29</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Sun</p>
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame58 />
      <Frame60 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame31 />
      <Frame35 />
      <Frame39 />
      <Frame45 />
      <Frame49 />
      <Frame53 />
      <Frame57 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Schedules() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="schedules">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0f172a] text-[14px]">Morning Meds</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">08:00 AM</p>
    </div>
  );
}

function Frame66() {
  return <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame" />;
}

function Frame65() {
  return (
    <div className="bg-[#0d9488] content-stretch flex h-[20px] items-start justify-end p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Frame">
      <Frame66 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0f172a] text-[14px]">Afternoon Meds</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">01:00 PM</p>
    </div>
  );
}

function Frame70() {
  return <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame" />;
}

function Frame69() {
  return (
    <div className="bg-[#0d9488] content-stretch flex h-[20px] items-start justify-end p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Frame">
      <Frame70 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0f172a] text-[14px]">Evening Meds</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">08:00 PM</p>
    </div>
  );
}

function Frame74() {
  return <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame" />;
}

function Frame73() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex h-[20px] items-start p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Frame">
      <Frame74 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame63 />
      <Frame67 />
      <Frame71 />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="bell">
          <path d={svgPaths.p13cb380} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Bell />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <IconWrapper9 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Configure Alerts</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Reminders</p>
      <Frame62 />
      <Frame75 />
    </div>
  );
}

function Reminders() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="reminders">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame61 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Schedules />
      <Reminders />
    </div>
  );
}

function MainArea() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header />
        <MedicationList />
        <Frame26 />
      </div>
    </div>
  );
}

export default function ScreenMedication() {
  return (
    <div className="bg-[#fafafa] content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex items-start relative size-full" data-name="screen-medication">
      <Sidebar />
      <MainArea />
    </div>
  );
}