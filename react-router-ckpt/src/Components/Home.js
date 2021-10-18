
export default function Home({ props }) {
  const profile = {
    newsArticles: [
      {
        title: "Winning at Life!",
        article: "There are many ways to do so...but the best is just try, try, try again!"
      },
      {
        title: "Losing at life :(",
        article: "Your sports team is vastly inferior. That simple fact is plainly obvious to see We're gonna kick your collective posterior Of course you realize we're speaking figuratively Our stats are thoroughly impressive Our coach really has the Midas touch Our players are fast and strong and brave And your guys, eh, not so much In fact we've played teams across the nation And you're the worst one we've come across Try to assimilate that information And it just might help you cope with your impending loss Oh, and if somehow we are still failing To affectively articulate the points at hand Allow us now to summarize them in a manner That your feeble brains can understand We're great (we're great) And you suck (you suck) We're great we're great And you suck (you suck) We're great (we're great) And you suck (you suck) You see there's us we're great And then there's you (you suck) We're really, really great really great In contrast, you really suck (really suck) Okay, full disclosure, we're not that great But nevertheless, you suck Your sports team will soon suffer swift defeat That theory's backed up by empirical evidence We're gonna grind up your guys into burger meat Again, of course, we're speaking in the figurative sense What's the use of even going through the motions When you know that you're gonna lose anyhow So why don't you save us all some time And give up now (you suck!)"
      },
      {
        title: "more articles",
        article: "more stuff here"
      }
    ]
  };

  return (
    <>
      {profile.newsArticles.map((article) => {
        return (
          <li>
            {article.title}
          </li>
        )
      })}
    </>
  );
}