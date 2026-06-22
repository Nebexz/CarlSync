import svgPaths from "./svg-mk1d5nxfl8";

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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Home</p>
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
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Medication</p>
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

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[28px]">Good morning, Dr. Aris</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[15px]">Wednesday, October 25, 2023</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <div className="content-stretch flex h-[38px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0 w-[188px]" data-name="Button">
        <div aria-hidden className="absolute border-[#1c2b3a] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1c2b3a] text-[14px] whitespace-nowrap">Emergency Protocol</p>
      </div>
      <div className="bg-[#10b981] content-stretch flex h-[38px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0 w-[126px]" data-name="Button">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">New Entry</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Age: 72</p>
      <div className="bg-[#e2e8f0] h-[12px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">ID: #PC-9821</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Robert Chen</p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#10b981] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[64px]" data-name="Avatar">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">RC</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Frame">
      <div className="bg-[#ef4444] content-stretch flex items-center justify-center px-[10px] py-[3px] relative rounded-[100px] shrink-0 w-[111px]" data-name="Badge">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[11px] text-white whitespace-nowrap">HYPERTENSION</p>
      </div>
      <div className="bg-[#1c2b3a] content-stretch flex items-center justify-center px-[10px] py-[3px] relative rounded-[100px] shrink-0 w-[118px]" data-name="Badge">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[11px] text-white whitespace-nowrap">TYPE 2 DIABETES</p>
      </div>
      <div className="bg-[#10b981] content-stretch flex items-center justify-center px-[10px] py-[3px] relative rounded-[100px] shrink-0 w-[63px]" data-name="Badge">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[11px] text-white whitespace-nowrap">STABLE</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function PatientSummary() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] relative rounded-[16px] shrink-0 w-full" data-name="patient-summary">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #EF4444)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Pending Tasks</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#0f172a] text-[28px]">4</p>
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#10b981] text-[11px]">2 high priority</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #10B981)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Appointments</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#0f172a] text-[28px]">1</p>
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#10b981] text-[11px]">In 2 hours</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #F59E0B)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Last Vitals</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#0f172a] text-[28px]">Stable</p>
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#10b981] text-[11px]">Measured 4h ago</p>
    </div>
  );
}

function KpiRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start min-h-[120px] relative shrink-0 w-full" data-name="kpi-row">
      <div className="bg-white content-stretch flex flex-col gap-[8px] h-[130px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[353.333px]" data-name="StatCard">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Frame8 />
        <Frame9 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] h-[130px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[353.333px]" data-name="StatCard">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Frame10 />
        <Frame11 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] h-[130px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[353.333px]" data-name="StatCard">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Frame12 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap">Recent Activity</p>
      <div className="content-stretch flex h-[37px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0 w-[85px]" data-name="Button">
        <div aria-hidden className="absolute border-[#1c2b3a] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1c2b3a] text-[12px] whitespace-nowrap">View All</p>
      </div>
    </div>
  );
}

function Pill() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1907)" id="pill">
          <path d={svgPaths.p2574b6d2} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1907">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Pill />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Medication Administered</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#64748b] text-[13px] w-[min-content]">Metformin 500mg given by Nurse Sarah</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative size-full">
          <Frame16 />
          <Frame17 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">10:30 AM</p>
        </div>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="activity">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1888)" id="activity">
          <path d={svgPaths.p3a5b4500} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1888">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Activity />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Vital Signs Updated</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#64748b] text-[13px] w-[min-content]">BP: 132/84 mmHg, HR: 72 bpm</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative size-full">
          <Frame18 />
          <Frame19 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">09:15 AM</p>
        </div>
      </div>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-text">
          <path d={svgPaths.p1b3c2900} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <FileText />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Doctor Note Added</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#64748b] text-[13px] w-[min-content]">Follow-up on cardiovascular stability</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="table-row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative size-full">
          <Frame20 />
          <Frame21 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">08:45 AM</p>
        </div>
      </div>
    </div>
  );
}

function ActivityList() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="activity-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableRow />
        <TableRow1 />
        <TableRow2 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <ActivityList />
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="activity-feed">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1882)" id="clock">
          <path d={svgPaths.pd1f6ec0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1882">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <Clock />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Frame">
      <IconWrapper4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Today, 2:00 PM</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Cardiology Follow-up</p>
        <Frame26 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#0d9488] relative self-stretch shrink-0 w-[4px]" data-name="Rectangle" />
        <Frame25 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1882)" id="clock">
          <path d={svgPaths.pd1f6ec0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1882">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <Clock1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Frame">
      <IconWrapper5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Tomorrow, 9:00 AM</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Blood Lab Tests</p>
        <Frame29 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#f59e0b] relative self-stretch shrink-0 w-[4px]" data-name="Rectangle" />
        <Frame28 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame27 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-black whitespace-nowrap">Upcoming Events</p>
      <Frame23 />
    </div>
  );
}

function CalendarWidget() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="calendar-widget">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

function ContentSplit() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px relative w-full" data-name="content-split">
      <ActivityFeed />
      <CalendarWidget />
    </div>
  );
}

function MainArea() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header />
        <PatientSummary />
        <KpiRow />
        <ContentSplit />
      </div>
    </div>
  );
}

function ScreenHome() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-full" data-name="screen-home">
      <Sidebar />
      <MainArea />
    </div>
  );
}

export default function Home() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <ScreenHome />
    </div>
  );
}