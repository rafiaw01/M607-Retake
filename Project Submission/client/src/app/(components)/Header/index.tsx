// The following is the Defining the Header of the Entire Dashboard 


type HeaderProps = {
    name: string;
  };
  
  const Header = ({ name }: HeaderProps) => {
    return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
  };
  
  export default Header;