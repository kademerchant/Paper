interface MenuButtonProps {
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <line
        x1="15"
        x2="95"
        y1="25"
        y2="25"
        stroke="#98978B"
        strokeWidth="10"
        strokeLinecap="round"
      ></line>
      <line
        x1="15"
        x2="95"
        y1="55"
        y2="55"
        stroke="#98978B"
        strokeWidth="10"
        strokeLinecap="round"
      ></line>
      <line
        x1="15"
        x2="95"
        y1="85"
        y2="85"
        stroke="#98978B"
        strokeWidth="10"
        strokeLinecap="round"
      ></line>
      <line
        className="menu-bar"
        x1="10"
        x2="90"
        y1="20"
        y2="20"
        stroke="#acd1d8"
        strokeWidth="10"
        strokeLinecap="round"
      ></line>
      <line
        className="menu-bar"
        x1="10"
        x2="90"
        y1="50"
        y2="50"
        stroke="#D8ACB0"
        strokeWidth="10"
        strokeLinecap="round"
      ></line>
      <line
        className="menu-bar"
        x1="10"
        x2="90"
        y1="80"
        y2="80"
        stroke="#b6d8ac"
        strokeWidth="10"
        strokeLinecap="round"
      ></line>
    </svg>
  );
};

export default MenuButton;
