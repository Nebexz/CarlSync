import svgPaths from "./svg-xho85hacf9";
import imgAvatar from "./3fd66fe6a6cf6e30d3e4d86c08c9b8d8bfe1becd.png";

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

function Frame2() {
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

function IconWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Calendar />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconWrapper1 />
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

function IconWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Fingerprint />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconWrapper2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">ID: PC-9821-00</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3_1563)" id="pencil">
          <path d={svgPaths.p4c0b400} id="Vector" stroke="var(--stroke-0, #0D9488)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1563">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper3() {
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
      <IconWrapper3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Edit Profile</p>
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="profile-header">
      <Avatar />
      <Frame1 />
      <Button />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#0d9488] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Personal Info</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Medical Conditions</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Vital Signs</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Allergies</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Documents</p>
    </div>
  );
}

function Frame11() {
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
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Robert</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">First Name</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Chen</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Last Name</p>
      <Frame18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">+1 (555) 012-3456</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Phone Number</p>
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">robert.chen@email.com</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Email Address</p>
      <Frame23 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">42 Garden St, Brookline, MA 02445</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Home Address</p>
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Blue Shield Healthcare - Plan #BS-8822</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Insurance Provider</p>
      <Frame27 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <Frame19 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Personal Details</p>
      <Frame13 />
    </div>
  );
}

function PersonalInfoForm() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="personal-info-form">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame12 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#0d9488] text-[12px] whitespace-nowrap">LC</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Linda Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#64748b] text-[12px]">Daughter • +1 (555) 998-1212</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Emergency Contact</p>
      <Frame30 />
    </div>
  );
}

function EmergencyContacts() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="emergency-contacts">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame29 />
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

function IconWrapper4() {
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
      <IconWrapper4 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d9488] text-[14px] whitespace-nowrap">Upload</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Documents</p>
      <Button1 />
    </div>
  );
}

function FileText() {
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

function IconWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <FileText />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Latest MRI Scan.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">2.4 MB • Oct 20</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrapper5 />
      <Frame37 />
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

function IconWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <FileText1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Lab Report - Oct 15.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">1.1 MB • Oct 15</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrapper6 />
      <Frame39 />
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

function IconWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <FileText2 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black">Discharge Summary.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px]">4.8 MB • Sep 28</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <IconWrapper7 />
      <Frame41 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame36 />
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function RecentDocs() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] relative rounded-[16px] shrink-0 w-full" data-name="recent-docs">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame33 />
      </div>
    </div>
  );
}

function Frame28() {
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
      <Frame28 />
    </div>
  );
}

function MainArea() {
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

export default function ScreenProfile() {
  return (
    <div className="bg-[#fafafa] content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05),0px_4px_3px_rgba(0,0,0,0.07)] flex items-start relative size-full" data-name="screen-profile">
      <Sidebar />
      <MainArea />
    </div>
  );
}