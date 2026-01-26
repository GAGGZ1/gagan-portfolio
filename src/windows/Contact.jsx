import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { socials } from "#constants";

const Contact = () => {
  return (
    <div className="flex flex-col max-h-[70vh]">
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5 overflow-y-auto">
        <img
          src={`${import.meta.env.BASE_URL}images/profile-logo.png`}
          alt="Adrian"
          className="w-20 rounded-full transition-transform duration-500 hover:scale-125"
        />

        <h3 className="text-lg font-semibold">Let’s Connect</h3>

        <p>Just a guy with a computer <br></br>
obsessed with engineering problems, distributed systems, and building things that scale.
</p>
 <p>
   Reach me at{" "}
  <a
    href="mailto:chauhangagan117@gmail.com"
    className="text-blue-600 "
  >
    chauhangagan117@gmail.com
  </a>
</p>



        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="nooperner noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
