function NavLinks({ item }) {
  return (
    <li>
      <a
        href={item.link}
        className="hover:text-mainColor transition-all duration-200"
      >
        {item.name}
      </a>
    </li>
  );
}

export default NavLinks;
