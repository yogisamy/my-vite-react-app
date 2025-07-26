export default function Profile(props) {
  console.log("Profile----->",props);
    return (
      <>
      <div className="test">
        Name-{props?.profile?.name}
        <hr/>
        Designation-{props?.profile?.designation}
        <hr/>
        Address-{props?.profile?.address}
      </div>
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      </>
    )
  }