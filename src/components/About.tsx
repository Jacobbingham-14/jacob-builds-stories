import jacobPhoto from "@/assets/jacob-photo.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <img 
              src={jacobPhoto} 
              alt="Jacob" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-[var(--shadow-elegant)]"
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Hey — I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Jacob
                </span>
                .
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Who I Am</h3>
              <p>
                I'm endlessly curious about how things work and how to make them better. Whether it's a product, a system, or a person, I love taking something raw and shaping it into something meaningful. That curiosity is what drives me as a builder and as a human.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What I'm Learning</h3>
              <p>
                I study Strategic Management at BYU, where I'm learning how to think critically about markets, people, and ideas. What I've loved most is applying those lessons outside the classroom by starting projects, learning from failure, and chasing the spark of new ideas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Where I've Been</h3>
              <p>
                For the past year, I've interned at Squak, an outdoor apparel company, where I've helped shape products, analyze markets, and bring ideas to life. That experience taught me how creativity, data, and execution come together to make something real.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What I'm Building</h3>
              <p className="mb-3">
                Outside of work, I spend hours every week building ideas that excite me.
              </p>
              <p className="mb-3">
                I also love tinkering with personal side projects like a 1-on-1 challenge app that helps friends push each other toward growth, or building custom automation agents with n8n just to see how far I can stretch an idea.
              </p>
              <p>
                For me, building isn't a hobby. It's how I think, learn, and connect with the world.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What Drives Me</h3>
              <p className="mb-3">
                I love creating things that inspire people and help them see their potential. I want to unlock creativity in others and help them feel more alive.
              </p>
              <p className="mb-3">
                Whether it's a product, a conversation, or a small side project, I'm drawn to the idea that small sparks can change how people see themselves.
              </p>
              <p className="mb-3">
                I believe progress isn't just about achievement. It's about creation, connection, and the quiet moments when something new begins to take shape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
