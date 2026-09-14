import { Reveal } from "./Reveal";
import { SectionHeading, container, surface } from "./ui";
import { Brain, Server, Smartphone } from "./icons";

const focus = [
  { icon: Smartphone, title: "App Development", text: "Mobile and web apps taken from idea to launch. Two of mine are live on Google Play." },
  { icon: Server, title: "Backend & APIs", text: "REST APIs with FastAPI, Django and Firebase, built to work well in production." },
  { icon: Brain, title: "AI / ML & Data", text: "Data pipelines, model training and analysis with Pandas and Scikit-learn." },
];

const strong = "font-semibold text-black";

export function About() {
  return (
    <section id="about" className="bg-stone pb-32 pt-20">
      <div className={`${container} grid items-start gap-14 lg:grid-cols-[1.3fr_1fr]`}>
        <div>
          <SectionHeading eyebrow="About me" title="A developer who ships real products" />
          <Reveal className="-mt-4 space-y-4 text-[17px] leading-relaxed text-black/65">
            <p>
              I graduated with a <strong className={strong}>B.Tech in Industrial Internet of Things (IIoT)</strong> from Guru Gobind Singh Indraprastha
              University, Delhi. My experience covers <strong className={strong}>software development, data analytics and machine learning</strong>.
            </p>
            <p>
              Development is my main focus. I&apos;ve published <strong className={strong}>two apps on Google Play</strong>, ExpenseCatch and Wingmail. At
              Klayons, where I currently work, I build and maintain <strong className={strong}>production mobile apps</strong> for Android and iOS. As a
              freelancer I delivered a cross-platform event app for a <strong className={strong}>University of Melbourne</strong> client.
            </p>
            <p>
              In college I studied neural networks, CNNs, RNNs, backpropagation and Transformers. I enjoy hard problems and work well in a team or on my
              own.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-3">
          {focus.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className={`${surface} flex items-start gap-4 p-6 transition-colors hover:bg-white`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-black/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
