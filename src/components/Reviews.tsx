
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Mateen Tukhi",
      review: "Imtiaz is a FlutterFlow wizard! He quickly understood what I needed for my app and delivered a clean, user-friendly interface with great attention to detail. Communication was smooth throughout the project. Highly recommend if you want quality work done fast!",
      image: "https://i.postimg.cc/259m8xwV/491469915-1217857969943654-3666680522408233270-n.jpg"
    },
    {
      name: "Paul Roberts", 
      review: "Very professional and reliable. He built an entire feature-rich FlutterFlow app for my startup, including chat, payments, and notifications. What stood out was his problem-solving mindset — he always had a smart solution ready. Will definitely work with him again.",
      image: "https://i.postimg.cc/fL04WQyr/robert-paul.jpg"
    },
    {
      name: "Sami Douglas",
      review: "Outstanding experience. The project was complex, involving dynamic content, custom functions, and database integration, but he handled everything confidently. Imtiaz is not just a developer; he understands product goals and user experience. Great value for money.",
      image: null
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients who trusted me with their projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {renderStars()}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  {review.image ? (
                    <AvatarImage src={review.image} alt={review.name} />
                  ) : (
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
