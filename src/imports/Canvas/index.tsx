import svgPaths from "./svg-7aiuf31nbw";
import imgAvatar from "./3fd66fe6a6cf6e30d3e4d86c08c9b8d8bfe1becd.png";
import imgEllipse from "./b966fbeb4f9f320e6b94859a5614d30539b6a1ea.png";
import imgEllipse1 from "./4b3747f0d65ff29424eb92efbbe1d7bdb253c9ff.png";
import imgEllipse2 from "./462589104d55f1d24c1d59acd5ce607a374a97de.png";
import imgEllipse3 from "./3adcba98ee3c77776083ad2cb6e4b658a53bd8e5.png";
import imgEllipse4 from "./85573bddb8eac3062863b48c6a409707e44e9d39.png";
import imgAvatar1 from "./bcb7c7625a73cc542b828f3bd7ac32919508271b.png";
import imgAvatar2 from "./72d246601c328fa671463ca12f4cce31a53e829b.png";
import imgAvatar3 from "./f94fe2615b5611dfea6a6216cd2846c406379bdb.png";
import imgAvatar4 from "./d0d72ba247ee949e830b2e6838972dfc5e6ae270.png";
import imgAvatar5 from "./21be08b2f5586231f458f0b1453c95f2330f39ab.png";
import imgAvatar6 from "./3770d9188365ac2a1c5cc587710b382367eff1b1.png";
import imgAvatar7 from "./77db41a36c0e8d2dd9670a870d3668bc4cb3245d.png";
import imgRectangle from "./952932e6431840b9750485f01e5bfd7a6a12f904.png";
import imgRectangle1 from "./3f81e47dd16812b6e5aee3dfacec8adae8cf3084.png";

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

function Home() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Home">
      <ScreenHome />
    </div>
  );
}

function HeartCrack1() {
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

function IconWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <HeartCrack1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#10b981] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper6 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame30 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList1() {
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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Patient Profile</p>
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

function Sidebar1() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] py-[32px] relative size-full">
        <Logo1 />
        <NavList1 />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="pointer-events-none relative rounded-[60px] shrink-0 size-[120px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[60px] size-full" src={imgAvatar} />
      <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[60px]" />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">Active Patient</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#0f172a] text-[32px] whitespace-nowrap">Robert Chen</p>
      <Badge />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar">
          <path d={svgPaths.p58fbb00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Calendar />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconWrapper7 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">DOB: 12 July 1951</p>
    </div>
  );
}

function Fingerprint() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fingerprint">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1843)" id="fingerprint">
          <path d={svgPaths.p32d0ca00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1843">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Fingerprint />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconWrapper8 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">ID: PC-9821-00</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1818)" id="pencil">
          <path d={svgPaths.p4c0b400} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1818">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Pencil />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper9 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Edit Profile</p>
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="profile-header">
      <Avatar />
      <Frame31 />
      <Button />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d9488] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Personal Info</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Medical Conditions</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Vital Signs</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Allergies</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Documents</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Emergency Contacts</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tabs">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Robert</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">First Name</p>
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Chen</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Last Name</p>
      <Frame48 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame45 />
      <Frame47 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">+1 (555) 012-3456</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Phone Number</p>
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">robert.chen@email.com</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Email Address</p>
      <Frame53 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">42 Garden St, Brookline, MA 02445</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Home Address</p>
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Blue Shield Healthcare - Plan #BS-8822</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Insurance Provider</p>
      <Frame57 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame44 />
      <Frame49 />
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Personal Details</p>
      <Frame43 />
    </div>
  );
}

function PersonalInfoForm() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="personal-info-form">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame42 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#0d9488] text-[12px] whitespace-nowrap">LC</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Linda Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#64748b] text-[12px]">Daughter • +1 (555) 998-1212</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Emergency Contact</p>
      <Frame60 />
    </div>
  );
}

function EmergencyContacts() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="emergency-contacts">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame59 />
      </div>
    </div>
  );
}

function FolderPlus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="folder-plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="folder-plus">
          <path d={svgPaths.p370d0780} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <FolderPlus />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper10 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Upload</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Documents</p>
      <Button1 />
    </div>
  );
}

function FileText1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <FileText1 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Latest MRI Scan.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">2.4 MB • Oct 20</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrapper11 />
      <Frame67 />
    </div>
  );
}

function FileText2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <FileText2 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Lab Report - Oct 15.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">1.1 MB • Oct 15</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrapper12 />
      <Frame69 />
    </div>
  );
}

function FileText3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p27efcb00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <FileText3 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Discharge Summary.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">4.8 MB • Sep 28</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrapper13 />
      <Frame71 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame66 />
      <Frame68 />
      <Frame70 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function RecentDocs() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] relative rounded-[16px] shrink-0 w-full" data-name="recent-docs">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame63 />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Frame">
      <EmergencyContacts />
      <RecentDocs />
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px relative w-full" data-name="profile-content">
      <PersonalInfoForm />
      <Frame58 />
    </div>
  );
}

function MainArea1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <ProfileHeader />
        <Tabs />
        <ProfileContent />
      </div>
    </div>
  );
}

function ScreenProfile() {
  return (
    <div className="bg-[#fafafa] content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-profile">
      <Sidebar1 />
      <MainArea1 />
    </div>
  );
}

function HeartCrack2() {
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

function IconWrapper14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <HeartCrack2 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#10b981] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper14 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame72 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList2() {
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

function Sidebar2() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] py-[32px] relative size-full">
        <Logo2 />
        <NavList2 />
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

function IconWrapper15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Search />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconWrapper15 />
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

function IconWrapper16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Plus />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#0d9488] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <IconWrapper16 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add Medication</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Medication Management</p>
      <Frame73 />
    </div>
  );
}

function Frame77() {
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

function Pill1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1877)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill1 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper17 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame80 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Metformin</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#166534] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame82 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame79 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">500mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">2x Daily</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Aris</p>
          <Frame81 />
        </div>
      </div>
    </div>
  );
}

function Pill2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1877)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill2 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper18 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame85 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Lisinopril</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#166534] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame87 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame84 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">10mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">1x Daily</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Aris</p>
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function Pill3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1877)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill3 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper19 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame90 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Atorvastatin</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#166534] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame92 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame89 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">20mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">Nightly</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Aris</p>
          <Frame91 />
        </div>
      </div>
    </div>
  );
}

function Pill4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1877)" id="pill">
          <path d={svgPaths.p17a8be00} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Pill4 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <IconWrapper20 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame95 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Amoxicillin</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#92400e] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#92400e] text-[12px] whitespace-nowrap">COMPLETED</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <Frame97 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative size-full">
          <Frame94 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[120px]">250mg</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[140px]">3x Daily</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[160px]">Dr. Miller</p>
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame77 />
      <Frame78 />
      <Frame83 />
      <Frame88 />
      <Frame93 />
    </div>
  );
}

function MedicationList() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="medication-list">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame76 />
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

function IconWrapper21() {
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

function IconWrapper22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <ChevronRight />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <IconWrapper21 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Oct 23 - Oct 29</p>
      <IconWrapper22 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Weekly Schedule</p>
      <Frame101 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">23</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Mon</p>
      <Frame105 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame104 />
      <Frame106 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">24</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Tue</p>
      <Frame109 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame108 />
      <Frame110 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">25</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0d9488] text-[12px] whitespace-nowrap">Wed</p>
      <Frame113 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[8px] relative size-full text-[11px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0d9488] w-full">08:00 AM</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0f172a] w-full">Metformin</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic p-[8px] relative size-full text-[11px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#92400e] w-[min-content]">12:30 PM</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0f172a] whitespace-nowrap">Lisinopril</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-[#fafafa] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-h-[inherit] p-[8px] relative size-full">
        <Frame115 />
        <Frame116 />
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame112 />
      <Frame114 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">26</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Thu</p>
      <Frame119 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame118 />
      <Frame120 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">27</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Fri</p>
      <Frame123 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame122 />
      <Frame124 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">28</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Sat</p>
      <Frame127 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame126 />
      <Frame128 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">29</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Sun</p>
      <Frame131 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#fafafa] h-[200px] min-h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="min-h-[inherit] relative size-full" />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <Frame130 />
      <Frame132 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame103 />
      <Frame107 />
      <Frame111 />
      <Frame117 />
      <Frame121 />
      <Frame125 />
      <Frame129 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame100 />
      <Frame102 />
    </div>
  );
}

function Schedules() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="schedules">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame99 />
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0f172a] text-[14px]">Morning Meds</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">08:00 AM</p>
    </div>
  );
}

function Frame138() {
  return <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame" />;
}

function Frame137() {
  return (
    <div className="bg-[#0d9488] content-stretch flex h-[20px] items-start justify-end p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Frame">
      <Frame138 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame136 />
      <Frame137 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0f172a] text-[14px]">Afternoon Meds</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">01:00 PM</p>
    </div>
  );
}

function Frame142() {
  return <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame" />;
}

function Frame141() {
  return (
    <div className="bg-[#0d9488] content-stretch flex h-[20px] items-start justify-end p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Frame">
      <Frame142 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame140 />
      <Frame141 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0f172a] text-[14px]">Evening Meds</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">08:00 PM</p>
    </div>
  );
}

function Frame146() {
  return <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame" />;
}

function Frame145() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex h-[20px] items-start p-[2px] relative rounded-[10px] shrink-0 w-[40px]" data-name="Frame">
      <Frame146 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame144 />
      <Frame145 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame135 />
      <Frame139 />
      <Frame143 />
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

function IconWrapper23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Bell />
    </div>
  );
}

function Frame147() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <IconWrapper23 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Configure Alerts</p>
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Reminders</p>
      <Frame134 />
      <Frame147 />
    </div>
  );
}

function Reminders() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="reminders">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame133 />
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Schedules />
      <Reminders />
    </div>
  );
}

function MainArea2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header1 />
        <MedicationList />
        <Frame98 />
      </div>
    </div>
  );
}

function ScreenMedication() {
  return (
    <div className="bg-[#fafafa] content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-medication">
      <Sidebar2 />
      <MainArea2 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect fill="var(--fill-0, #10B981)" height="32" rx="8" width="32" />
          <path d={svgPaths.p2cfd8900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame148 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList3() {
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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Tasks</p>
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

function Sidebar3() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] py-[32px] relative size-full">
        <Logo3 />
        <NavList3 />
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#0f172a]">Tasks</p>
      <p className="relative shrink-0 text-[#64748b]">Wednesday, October 25, 2023</p>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#0d9488] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button / Primary">
      <div className="relative shrink-0 size-[18px]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d="M1 10H19M10 1V19" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Add Task</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Frame149 />
      <ButtonPrimary />
    </div>
  );
}

function ChipActive() {
  return (
    <div className="bg-[#0d9488] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="Chip / Active">
      <div aria-hidden className="absolute border-[#0d9488] border-b-2 border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Pending</p>
    </div>
  );
}

function ChipDefault() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="Chip / Default">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b-2 border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function ChipDefault1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="Chip / Default">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b-2 border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Assigned</p>
    </div>
  );
}

function ChipDefault2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[14px] py-[10px] relative rounded-[999px] shrink-0" data-name="Chip / Default">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b-2 border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Custom Tasks</p>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="filter-tabs">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <ChipActive />
      <ChipDefault />
      <ChipDefault1 />
      <ChipDefault2 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#94a3b8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse} width="24" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Nurse Sarah</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Due: 12:30 PM</p>
      <Frame156 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Blood pressure check - 2h post medication</p>
      <Frame155 />
    </div>
  );
}

function BadgeDanger() {
  return (
    <div className="bg-[#fee2e2] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge / Danger">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#991b1b] text-[11px] uppercase whitespace-nowrap">High</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Frame153 />
      <Frame154 />
      <BadgeDanger />
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#94a3b8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse1} width="24" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">David PT</p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Due: 02:00 PM</p>
      <Frame160 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Physical therapy exercises (Leg strength)</p>
      <Frame159 />
    </div>
  );
}

function BadgeWarning() {
  return (
    <div className="bg-[#fef3c7] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge / Warning">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#92400e] text-[11px] uppercase whitespace-nowrap">Medium</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Frame157 />
      <Frame158 />
      <BadgeWarning />
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#94a3b8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Dr. Aris</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Due: End of Day</p>
      <Frame164 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Renew Lisinopril prescription</p>
      <Frame163 />
    </div>
  );
}

function BadgeDanger1() {
  return (
    <div className="bg-[#fee2e2] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge / Danger">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#991b1b] text-[11px] uppercase whitespace-nowrap">High</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Frame161 />
      <Frame162 />
      <BadgeDanger1 />
    </div>
  );
}

function Frame165() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#94a3b8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Nurse Sarah</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Due: 08:00 PM</p>
      <Frame168 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Update evening fluid intake log</p>
      <Frame167 />
    </div>
  );
}

function BadgeInfo() {
  return (
    <div className="bg-[#dbeafe] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge / Info">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1e40af] text-[11px] uppercase whitespace-nowrap">Low</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center py-[12px] relative shrink-0 w-full" data-name="TableRow">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Frame165 />
      <Frame166 />
      <BadgeInfo />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">{`Today's Pending Tasks`}</p>
        <TableRow3 />
        <TableRow4 />
        <TableRow5 />
        <TableRow6 />
      </div>
    </div>
  );
}

function CompletedLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="completed-link">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-13.98%_-6.25%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2363 18.0004">
            <path d={svgPaths.p1a162500} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Completed Tasks (12)</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <Card />
      <CompletedLink />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-start justify-between py-[8px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px]">Total Pending</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[20px]">4</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex items-start justify-between py-[8px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px]">High Priority</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#991b1b] text-[20px]">2</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-start justify-between py-[8px] relative shrink-0 text-[#64748b] w-full" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px]">Overdue</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px]">0</p>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex items-start justify-between py-[8px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px]">Completed (Today)</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d9488] text-[20px]">8</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame171 />
      <Frame172 />
      <Frame173 />
      <Frame174 />
    </div>
  );
}

function Frame175() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div className="bg-[#0d9488] h-full relative shrink-0 w-[198px]" data-name="Rectangle" />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Task Summary</p>
        <Frame170 />
        <Frame175 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Daily Goal: 66% completed</p>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]" data-name="Frame">
      <Card1 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame152 />
      <Frame169 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <FilterTabs />
      <Frame151 />
    </div>
  );
}

function MainArea3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header2 />
        <Frame150 />
      </div>
    </div>
  );
}

function ScreenTasks() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-tasks">
      <Sidebar3 />
      <MainArea3 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect fill="var(--fill-0, #10B981)" height="32" rx="8" width="32" />
          <path d={svgPaths.p2cfd8900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame176 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList4() {
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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Calendar</p>
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

function Sidebar4() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] py-[32px] relative size-full">
        <Logo4 />
        <NavList4 />
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#0f172a] text-[28px]">Calendar</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[15px]">October 2023</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Frame177 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="7.5" stroke="var(--stroke-0, #E2E8F0)" width="31" x="0.5" y="0.5" />
          <path d="M24 24L8 16L24 8" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame184() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="7.5" stroke="var(--stroke-0, #E2E8F0)" width="31" x="0.5" y="0.5" />
          <path d="M8 24L24 16L8 8" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Frame">
      <Frame183 />
      <Frame184 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">October 2023</p>
      <Frame182 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex items-start px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#14b8a6] text-[14px] whitespace-nowrap">Month</p>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Week</p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-name="Frame">
      <Frame186 />
      <Frame187 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame181 />
          <Frame185 />
        </div>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Sun</p>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Mon</p>
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Tue</p>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Wed</p>
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Thu</p>
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Fri</p>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px py-[12px] relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Sat</p>
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame190 />
      <Frame191 />
      <Frame192 />
      <Frame193 />
      <Frame194 />
      <Frame195 />
      <Frame196 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">29</p>
    </div>
  );
}

function Frame198() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame199 />
      </div>
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">30</p>
    </div>
  );
}

function Frame200() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame201 />
      </div>
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame202() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame203 />
      </div>
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame204() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame205 />
      </div>
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame206() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame207 />
      </div>
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame208() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame209 />
      </div>
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame210() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame211 />
      </div>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex h-[120px] items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame198 />
      <Frame200 />
      <Frame202 />
      <Frame204 />
      <Frame206 />
      <Frame208 />
      <Frame210 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">6</p>
    </div>
  );
}

function Frame213() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame214 />
      </div>
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">7</p>
    </div>
  );
}

function Frame215() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame216 />
      </div>
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">8</p>
    </div>
  );
}

function Frame217() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame218 />
      </div>
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">9</p>
    </div>
  );
}

function Frame219() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame220 />
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">10</p>
    </div>
  );
}

function Frame221() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame222 />
      </div>
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">11</p>
    </div>
  );
}

function Frame223() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame224 />
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">12</p>
    </div>
  );
}

function Frame225() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame226 />
      </div>
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex h-[120px] items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame213 />
      <Frame215 />
      <Frame217 />
      <Frame219 />
      <Frame221 />
      <Frame223 />
      <Frame225 />
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">13</p>
    </div>
  );
}

function Frame228() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame229 />
      </div>
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">14</p>
    </div>
  );
}

function Frame230() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame231 />
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">15</p>
    </div>
  );
}

function Frame232() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame233 />
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">16</p>
    </div>
  );
}

function Frame234() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame235 />
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">17</p>
    </div>
  );
}

function Frame236() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame237 />
      </div>
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">18</p>
    </div>
  );
}

function Frame238() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame239 />
      </div>
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">19</p>
    </div>
  );
}

function Frame240() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame241 />
      </div>
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex h-[120px] items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame228 />
      <Frame230 />
      <Frame232 />
      <Frame234 />
      <Frame236 />
      <Frame238 />
      <Frame240 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">20</p>
    </div>
  );
}

function Frame243() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame244 />
      </div>
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">21</p>
    </div>
  );
}

function Frame245() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame246 />
      </div>
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">22</p>
    </div>
  );
}

function Frame247() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame248 />
      </div>
    </div>
  );
}

function Frame250() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">23</p>
    </div>
  );
}

function Frame249() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame250 />
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">24</p>
    </div>
  );
}

function Frame251() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame252 />
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">25</p>
    </div>
  );
}

function Frame253() {
  return (
    <div className="bg-[#f0fdfa] flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative size-full">
        <Frame254 />
        <div className="bg-[#0d9488] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">26</p>
    </div>
  );
}

function Frame255() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame256 />
      </div>
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex h-[120px] items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame243 />
      <Frame245 />
      <Frame247 />
      <Frame249 />
      <Frame251 />
      <Frame253 />
      <Frame255 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">27</p>
    </div>
  );
}

function Frame258() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame259 />
      </div>
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">28</p>
    </div>
  );
}

function Frame260() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame261 />
      </div>
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">29</p>
    </div>
  );
}

function Frame262() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame263 />
      </div>
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">30</p>
    </div>
  );
}

function Frame264() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame265 />
      </div>
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">31</p>
    </div>
  );
}

function Frame266() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame267 />
      </div>
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame268() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame269 />
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame270() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame271 />
      </div>
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex h-[120px] items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame258 />
      <Frame260 />
      <Frame262 />
      <Frame264 />
      <Frame266 />
      <Frame268 />
      <Frame270 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame189 />
      <Frame197 />
      <Frame212 />
      <Frame227 />
      <Frame242 />
      <Frame257 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex flex-col gap-[20px] items-start relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame180 />
      <Frame188 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#64748b] text-[13px]">DATE</p>
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] w-[200px]">PROVIDER</p>
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] w-[180px]">TYPE</p>
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#64748b] text-[13px] text-right w-[120px]">OUTCOME</p>
    </div>
  );
}

function BadgeStable() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="badge-stable">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#166534] text-[11px] uppercase whitespace-nowrap">Stable</p>
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <BadgeStable />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[14px] text-black">Oct 12, 2023</p>
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black w-[200px]">Dr. Aris (Cardiology)</p>
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black w-[180px]">Routine Checkup</p>
      <Frame272 />
    </div>
  );
}

function BadgeReview() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="badge-review">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1e40af] text-[11px] uppercase whitespace-nowrap">Review</p>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[120px]" data-name="Frame">
      <BadgeReview />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="table-row">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[14px] text-black">Sep 25, 2023</p>
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black w-[200px]">Dr. Miller (Lab)</p>
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black w-[180px]">Blood Work</p>
      <Frame273 />
    </div>
  );
}

function AppointmentHistoryTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="appointment-history-table">
      <TableHeader />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap">Appointment History</p>
        <AppointmentHistoryTable />
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-name="Frame">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Frame278() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black">Dr. Aris</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px]">Cardiologist</p>
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[36px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="36" src={imgEllipse4} width="36" />
      </div>
      <Frame278 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[14px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p129aa600} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Oct 25, 2:00 PM</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <MapPin />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Medical Plaza, Room 402</p>
    </div>
  );
}

function Frame276() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame277 />
      <Frame279 />
      <Frame280 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame276 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap">Upcoming Appointments</p>
        <Frame275 />
      </div>
    </div>
  );
}

function Frame283() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[12px] w-full" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0d9488]">FROM DR. ARIS</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b]">2h ago</p>
    </div>
  );
}

function Frame282() {
  return (
    <div className="[word-break:break-word] bg-[#f0fdfa] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[308px] whitespace-nowrap" data-name="Frame">
      <Frame283 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-black">{`"Patient should continue current lisinopril dosage but monitor morning BP closely. Added new vitamin supplement."`}</p>
    </div>
  );
}

function Frame284() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">+ New Note</p>
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame282 />
      <Frame284 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap">Doctor Notes</p>
        <Frame281 />
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[340px]" data-name="Frame">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px relative w-full" data-name="Frame">
      <Frame179 />
      <Frame274 />
    </div>
  );
}

function MainArea4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header3 />
        <Frame178 />
      </div>
    </div>
  );
}

function ScreenCalendar() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-calendar">
      <Sidebar4 />
      <MainArea4 />
    </div>
  );
}

function Frame285() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect fill="var(--fill-0, #10B981)" height="32" rx="8" width="32" />
          <path d={svgPaths.p2cfd8900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Logo5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame285 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList5() {
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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=activity">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                <path d="M21 10H17L14 19L8 1L5 10H1" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Timeline</p>
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

function Sidebar5() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative size-full">
        <Logo5 />
        <NavList5 />
      </div>
    </div>
  );
}

function Frame286() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[28px]">Activity Timeline</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px]">Wednesday, October 25, 2023</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Frame286 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#0d9488] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[12px] py-[8px] relative size-full text-[#0d9488] whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px]">All Activities</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px]">24</p>
        </div>
      </div>
    </div>
  );
}

function Frame291() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[12px] py-[8px] relative size-full whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#64748b] text-[14px]">Doctor Updates</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">8</p>
        </div>
      </div>
    </div>
  );
}

function Frame292() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[12px] py-[8px] relative size-full whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#64748b] text-[14px]">Nurse Observations</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">12</p>
        </div>
      </div>
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[12px] py-[8px] relative size-full whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#64748b] text-[14px]">System Alerts</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Filter by Type</p>
      <Frame290 />
      <Frame291 />
      <Frame292 />
      <Frame293 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Last 7 Days</p>
        </div>
      </div>
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Date Range</p>
      <Frame295 />
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[240px]" data-name="Frame">
      <Frame289 />
      <div className="bg-[#e2e8f0] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame294 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatar1} />
    </div>
  );
}

function Frame298() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Post</p>
    </div>
  );
}

function Frame297() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Avatar1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#64748b] text-[14px]">Add a quick update or comment...</p>
          <Frame298 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgAvatar2} />
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Frame">
      <Avatar2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 2">
            <line id="Line" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="2" x2="40" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#166534] text-[12px] whitespace-nowrap">UPDATE</p>
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Dr. Aris</p>
      <Badge1 />
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame305 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">1h ago</p>
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame304 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Post-checkup medication adjustment</p>
    </div>
  );
}

function Frame306() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[488px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Increased Metformin dosage to 1000mg daily. Patient reports improved energy levels. Vital signs remaining stable within normal parameters.</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[32px] relative" data-name="Frame">
      <Frame303 />
      <Frame306 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame301 />
      <Frame302 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgAvatar3} />
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Frame">
      <Avatar3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 2">
            <line id="Line" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="2" x2="40" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1e40af] text-[12px] whitespace-nowrap">ATTEND</p>
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Nurse Sarah</p>
      <Badge2 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame312 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">3h ago</p>
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame311 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Routine Vitals Check</p>
    </div>
  );
}

function Frame313() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[488px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">BP: 128/82, HR: 74, SpO2: 98%. Patient is responsive and alert. Complained of minor stiffness in left knee.</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[32px] relative" data-name="Frame">
      <Frame310 />
      <Frame313 />
    </div>
  );
}

function Frame307() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame308 />
      <Frame309 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgAvatar4} />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Frame">
      <Avatar4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 2">
            <line id="Line" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="2" x2="40" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1e40af] text-[12px] whitespace-nowrap">COMMENT</p>
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Linda Chen (Family)</p>
      <Badge3 />
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame319 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Yesterday, 5:45 PM</p>
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame318 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Question about upcoming lab results</p>
    </div>
  );
}

function Frame320() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[488px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Hi Dr. Aris, just wondering when we can expect the results from the blood lab yesterday? Dad is asking. Thanks!</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[32px] relative" data-name="Frame">
      <Frame317 />
      <Frame320 />
    </div>
  );
}

function Frame314() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame315 />
      <Frame316 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame300 />
      <Frame307 />
      <Frame314 />
    </div>
  );
}

function Frame296() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Frame">
      <Frame297 />
      <Frame299 />
    </div>
  );
}

function Frame323() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px]">Weekly Updates</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black">42</p>
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-end relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#0d9488] flex-[1_0_0] h-[16px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#0d9488] flex-[1_0_0] h-[24px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#0d9488] flex-[1_0_0] h-[18px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#0d9488] flex-[1_0_0] h-[36px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#0d9488] flex-[1_0_0] h-[12px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#0d9488] flex-[1_0_0] h-[28px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#0d9488] flex-[1_0_0] h-[22px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="mr-[-8px] relative rounded-[14px] shrink-0 size-[28px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgAvatar5} />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="mr-[-8px] relative rounded-[14px] shrink-0 size-[28px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgAvatar6} />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="mr-[-8px] relative rounded-[14px] shrink-0 size-[28px]" data-name="avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgAvatar7} />
    </div>
  );
}

function Frame327() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">+4</p>
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <Avatar5 />
      <Avatar6 />
      <Avatar7 />
      <Frame327 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Recent Authors</p>
      <Frame326 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame323 />
      <Frame324 />
      <Frame325 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap">Activity Stats</p>
        <Frame322 />
      </div>
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]" data-name="Frame">
      <Card6 />
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame288 />
      <Frame296 />
      <Frame321 />
    </div>
  );
}

function MainArea5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="main-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header4 />
        <Frame287 />
      </div>
    </div>
  );
}

function ScreenTimeline() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-timeline">
      <Sidebar5 />
      <MainArea5 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect fill="var(--fill-0, #10B981)" height="32" rx="8" width="32" />
          <path d={svgPaths.p1f7eafc0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Logo6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame328 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList6() {
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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Emergency</p>
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

function Sidebar6() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[20px] relative size-full">
        <Logo6 />
        <NavList6 />
      </div>
    </div>
  );
}

function Frame329() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0f172a] text-[28px]">Emergency Dashboard</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px]">Robert Chen • ID: #PC-9821</p>
    </div>
  );
}

function Megaphone() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="megaphone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="megaphone">
          <path d={svgPaths.pfc06a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame331() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <Megaphone />
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Frame331 />
    </div>
  );
}

function BtnBroadcastAlert() {
  return (
    <div className="bg-[#dc2626] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="btn-broadcast-alert">
      <Frame330 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Broadcast Alert</p>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Frame329 />
      <BtnBroadcastAlert />
    </div>
  );
}

function Frame332() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <rect fill="var(--fill-0, #DC2626)" height="48" rx="24" width="48" />
          <path d={svgPaths.p2918dc80} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame333() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[#dc2626] whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px]">Immediate Action Required</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px]">Hypertensive Crisis Protocol initialized. Patient Vitals: 190/110 mmHg.</p>
    </div>
  );
}

function AlertBanner() {
  return (
    <div className="bg-[#fef2f2] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] relative rounded-[16px] shrink-0 w-full" data-name="alert-banner">
      <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[24px] relative size-full">
          <Frame332 />
          <Frame333 />
        </div>
      </div>
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[32px] shrink-0 size-[64px]" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function Frame338() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black">Linda Chen</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">Daughter (Primary)</p>
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame337 />
      <Frame338 />
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1785)" id="phone">
          <path d={svgPaths.p2a029800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame342() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <Phone />
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Frame342 />
    </div>
  );
}

function Frame340() {
  return (
    <div className="bg-[#0d9488] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <Frame341 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Call Now</p>
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-black whitespace-nowrap">+1 (555) 998-1212</p>
      <Frame340 />
    </div>
  );
}

function ContactCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="contact-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
        <Frame336 />
        <Frame339 />
      </div>
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[32px] shrink-0 size-[64px]" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Frame345() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black">Arthur Chen</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">Brother</p>
    </div>
  );
}

function Frame343() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame344 />
      <Frame345 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1785)" id="phone">
          <path d={svgPaths.p2a029800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame349() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <Phone1 />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <Frame349 />
    </div>
  );
}

function Frame347() {
  return (
    <div className="bg-[#0d9488] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <Frame348 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Call Now</p>
    </div>
  );
}

function Frame346() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-black whitespace-nowrap">+1 (555) 234-9988</p>
      <Frame347 />
    </div>
  );
}

function ContactCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="contact-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
        <Frame343 />
        <Frame346 />
      </div>
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <ContactCard />
      <ContactCard1 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Designated Emergency Contacts</p>
      <Frame335 />
    </div>
  );
}

function Frame353() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d9488] text-[13px] whitespace-nowrap">O Positive</p>
    </div>
  );
}

function Frame352() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Blood Type</p>
      <Frame353 />
    </div>
  );
}

function Frame355() {
  return (
    <div className="bg-[#dc2626] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[13px] whitespace-nowrap">Penicillin, Peanuts</p>
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Known Allergies</p>
      <Frame355 />
    </div>
  );
}

function Frame357() {
  return (
    <div className="bg-[#d97706] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[13px] whitespace-nowrap">Type 2 Diabetes, Hypertension</p>
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Current Conditions</p>
      <Frame357 />
    </div>
  );
}

function Frame359() {
  return (
    <div className="bg-[#0d9488] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d9488] text-[13px] whitespace-nowrap">Metformin (500mg), Lisinopril (10mg)</p>
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Active Medications</p>
      <Frame359 />
    </div>
  );
}

function Frame351() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame352 />
      <Frame354 />
      <Frame356 />
      <Frame358 />
    </div>
  );
}

function MedicalInfo() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="medical-info">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Critical Medical Info</p>
        <Frame351 />
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="check">
          <path d={svgPaths.p11ffd8} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame362() {
  return (
    <div className="bg-[#166534] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <Check />
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame362 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Check airway and responsiveness</p>
    </div>
  );
}

function Frame364() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame363() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame364 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Call attending physician (Dr. Aris)</p>
    </div>
  );
}

function Frame366() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame365() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame366 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Administer emergency antihypertensive</p>
    </div>
  );
}

function Frame368() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame367() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame368 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Prepare transport to ICU</p>
    </div>
  );
}

function Frame360() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame361 />
      <Frame363 />
      <Frame365 />
      <Frame367 />
    </div>
  );
}

function Procedures() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="procedures">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Emergency Procedures</p>
        <Frame360 />
      </div>
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <MedicalInfo />
      <Procedures />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content-area">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Header5 />
        <AlertBanner />
        <Frame334 />
        <Frame350 />
      </div>
    </div>
  );
}

function Frame370() {
  return (
    <div className="bg-[#dc2626] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic p-[20px] relative size-full text-white whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[12px]">Universal Emergency</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px]">911</p>
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">St. Jude Main Hospital</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d9488] text-[18px]">(555) 900-1000</p>
      </div>
    </div>
  );
}

function Frame372() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">On-Call Nurse Sarah</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d9488] text-[18px]">(555) 900-4412</p>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">Ambulance Services</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d9488] text-[18px]">(555) 777-1122</p>
      </div>
    </div>
  );
}

function Frame374() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">Poison Control Center</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0d9488] text-[18px]">1-800-222-1222</p>
      </div>
    </div>
  );
}

function Frame369() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame370 />
      <Frame371 />
      <Frame372 />
      <Frame373 />
      <Frame374 />
    </div>
  );
}

function Frame375() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#0d9488] text-[12px]">Location Details</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">Room 402, East Wing, Ward B</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px]">Access Code: 2291#</p>
      </div>
    </div>
  );
}

function QuickDial() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[320px]" data-name="quick-dial">
      <div aria-hidden className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">Emergency Speed Dial</p>
        <Frame369 />
        <Frame375 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative self-stretch" data-name="main-content">
      <ContentArea />
      <QuickDial />
    </div>
  );
}

function ScreenEmergency() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-emergency">
      <Sidebar6 />
      <MainContent />
    </div>
  );
}

function Frame376() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect fill="var(--fill-0, #10B981)" height="32" rx="8" width="32" />
          <path d={svgPaths.p1f7eafc0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Logo7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[8px] relative shrink-0" data-name="logo">
      <Frame376 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">CareSync</p>
    </div>
  );
}

function NavList7() {
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
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[14px] text-white">Settings</p>
      </div>
    </div>
  );
}

function Sidebar7() {
  return (
    <div className="bg-[#1e2533] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[20px] relative size-full">
        <Logo7 />
        <NavList7 />
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[40px] px-[40px] relative size-full">
          <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[28px] text-black whitespace-nowrap">Settings</p>
          <div className="bg-[#10b981] content-stretch flex h-[40px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0" data-name="Button">
            <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Save Changes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsNav() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[280px]" data-name="settings-nav">
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Profile Settings</p>
      </div>
      <div className="bg-[#273e56] content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0" data-name="SidebarNavItem">
        <div className="bg-[#10b981] h-[20px] relative rounded-[2px] shrink-0 w-[3px]" data-name="Rectangle" />
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=bell">
          <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-6.67%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0002 17">
                <path d={svgPaths.pea8b970} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[87.5%_42.92%_8.31%_42.92%]" data-name="Vector">
            <div className="absolute inset-[-99.49%_-29.42%_-99.47%_-29.42%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.40037 3.00552">
                <path d={svgPaths.p16447680} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Notification Preferences</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=alarm-clock">
          <div className="absolute inset-[20.83%_16.67%_12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.pedb3a30} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[37.5%] left-1/2 right-[41.67%] top-[37.5%]" data-name="Vector">
            <div className="absolute inset-[-16.67%_-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
                <path d="M1 1V5L3 7" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[8.33%] right-[79.17%] top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-33.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <path d="M4 1L1 4" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[79.17%] right-[8.33%] top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-33.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <path d="M4 4L1 1" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">Reminder Settings</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=shield-check">
          <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
                <path d={svgPaths.p27979bf0} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">{`Privacy & Security`}</p>
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
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">App Preferences</p>
      </div>
      <div className="content-stretch flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="SidebarNavItem">
        <div className="relative shrink-0 size-[24px]" data-name="Icon-name=info">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
            <div className="absolute inset-[-25%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                <path d="M1 5V1" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-1px_-9999.77%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#94a3ba] text-[14px]">{`Help & Support`}</p>
      </div>
    </div>
  );
}

function Frame377() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black">Notification Preferences</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#64748b] text-[15px]">{`Choose how and when you want to receive alerts for Robert's care.`}</p>
    </div>
  );
}

function Frame381() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-black">Push Notifications</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#64748b] text-[13px]">Mobile and desktop real-time alerts</p>
    </div>
  );
}

function ToggleOn() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Toggle / On">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 25">
          <g id="Toggle / On">
            <rect fill="var(--fill-0, #0D9488)" height="24" rx="12" width="44" />
            <g filter="url(#filter0_d_1_1865)" id="Ellipse">
              <circle cx="32" cy="12" fill="var(--fill-0, white)" r="10" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_1_1865" width="24" x="20" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0666667 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1865" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1865" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame380() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame381 />
      <ToggleOn />
    </div>
  );
}

function Frame383() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-black">Email Alerts</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#64748b] text-[13px]">Daily digests and critical reports</p>
    </div>
  );
}

function ToggleOn1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Toggle / On">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 25">
          <g id="Toggle / On">
            <rect fill="var(--fill-0, #0D9488)" height="24" rx="12" width="44" />
            <g filter="url(#filter0_d_1_1865)" id="Ellipse">
              <circle cx="32" cy="12" fill="var(--fill-0, white)" r="10" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_1_1865" width="24" x="20" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0666667 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1865" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1865" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame383 />
      <ToggleOn1 />
    </div>
  );
}

function Frame385() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-black">SMS Notifications</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#64748b] text-[13px]">High-priority medication and emergency alerts</p>
    </div>
  );
}

function ToggleOff() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Toggle / Off">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 25">
          <g id="Toggle / Off">
            <rect fill="var(--fill-0, #E2E8F0)" height="24" rx="12" width="44" />
            <g filter="url(#filter0_d_1_1773)" id="Ellipse">
              <circle cx="12" cy="12" fill="var(--fill-0, white)" r="10" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_1_1773" width="24" x="0" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0666667 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1773" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1773" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame385 />
      <ToggleOff />
    </div>
  );
}

function Frame379() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame380 />
      <Frame382 />
      <Frame384 />
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[18px] text-black whitespace-nowrap">Delivery Channels</p>
      <Frame379 />
    </div>
  );
}

function Frame388() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#64748b] text-[15px] whitespace-nowrap">Instant</p>
        </div>
      </div>
    </div>
  );
}

function Frame389() {
  return (
    <div className="bg-[#0d9488] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#0d9488] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[15px] text-white whitespace-nowrap">Daily Digest</p>
        </div>
      </div>
    </div>
  );
}

function Frame390() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#64748b] text-[15px] whitespace-nowrap">Weekly Summary</p>
        </div>
      </div>
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame388 />
      <Frame389 />
      <Frame390 />
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[18px] text-black whitespace-nowrap">Summary Frequency</p>
      <Frame387 />
    </div>
  );
}

function Frame393() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-black">Quiet Hours</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[13px]">Silence all non-emergency notifications during this time.</p>
    </div>
  );
}

function ToggleOn2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Toggle / On">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 25">
          <g id="Toggle / On">
            <rect fill="var(--fill-0, #0D9488)" height="24" rx="12" width="44" />
            <g filter="url(#filter0_d_1_1865)" id="Ellipse">
              <circle cx="32" cy="12" fill="var(--fill-0, white)" r="10" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_1_1865" width="24" x="20" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0666667 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1865" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1865" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame392() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame393 />
      <ToggleOn2 />
    </div>
  );
}

function Frame397() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1855)" id="Frame">
          <path d={svgPaths.p1c21a200} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1855">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Frame397 />
    </div>
  );
}

function InputSelect() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input / Select">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Frame396 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">10:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame395() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Start Time</p>
      <InputSelect />
    </div>
  );
}

function Frame400() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1855)" id="Frame">
          <path d={svgPaths.p1c21a200} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1855">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame399() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Frame400 />
    </div>
  );
}

function InputSelect1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input / Select">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Frame399 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">07:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">End Time</p>
      <InputSelect1 />
    </div>
  );
}

function Frame394() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame395 />
      <Frame398 />
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame392 />
      <Frame394 />
    </div>
  );
}

function Frame401() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-end pt-[24px] relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#1c2b3a] content-stretch flex h-[40px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0" data-name="Button">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Reset Defaults</p>
      </div>
      <div className="bg-[#10b981] content-stretch flex h-[40px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0" data-name="Button">
        <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Apply Changes</p>
      </div>
    </div>
  );
}

function ActiveContent() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="active-content">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
        <Frame377 />
        <Frame378 />
        <div className="bg-[#e2e8f0] h-px relative shrink-0 w-full" data-name="Rectangle" />
        <Frame386 />
        <div className="bg-[#e2e8f0] h-px relative shrink-0 w-full" data-name="Rectangle" />
        <Frame391 />
        <Frame401 />
      </div>
    </div>
  );
}

function SettingsSplit() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="settings-split">
      <div className="content-stretch flex gap-[32px] items-start p-[40px] relative size-full">
        <SettingsNav />
        <ActiveContent />
      </div>
    </div>
  );
}

function MainArea6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="main-area">
      <Header6 />
      <SettingsSplit />
    </div>
  );
}

function ScreenSettings() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[1024px] items-start min-h-[1024px] relative shrink-0 w-[1440px]" data-name="screen-settings">
      <Sidebar7 />
      <MainArea6 />
    </div>
  );
}

export default function Canvas() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex gap-[40px] items-start p-[100px] relative size-full" data-name="canvas">
      <Home />
      <ScreenProfile />
      <ScreenMedication />
      <ScreenTasks />
      <ScreenCalendar />
      <ScreenTimeline />
      <ScreenEmergency />
      <ScreenSettings />
    </div>
  );
}