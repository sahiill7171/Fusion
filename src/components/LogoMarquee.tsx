const logos = [
  { name: "Quantum", text: "Quantum" },
  { name: "Acme Corp", text: "Acme Corp" },
  { name: "Echo Valley", text: "Echo Valley" },
  { name: "Pulse", text: "PULSE" },
  { name: "Outside", text: "Outside" },
  { name: "Apex", text: "Apex" },
  { name: "Celestial", text: "Celestial" },
  { name: "Twice", text: "Twice" },
];

const LogoMarquee = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-muted-foreground text-sm">
          Already chosen by these market leaders
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <span className="text-xl font-semibold text-muted-foreground tracking-wide">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
