import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/#about" },
  { label: "Services", ariaLabel: "View our services", link: "/#services" },
  { label: "Process", ariaLabel: "View our process", link: "/#process" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export function Header() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      menuButtonColor="#343231"
      openMenuButtonColor="#343231"
      changeMenuColorOnOpen={false}
    />
  );
}

