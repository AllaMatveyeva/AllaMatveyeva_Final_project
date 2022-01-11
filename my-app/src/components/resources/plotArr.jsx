import "./plotArr.scss";

function Plot(props) {
  const { target } = props;

  switch (target) {
    case "The Unexpected Journey":
      return (
        <>
          <p className="story">
            'The Hobbit: An Unexpected Journey' is a 2012 epic high
            fantasyadventure film directed by Peter Jackson. It is the first
            instalment in a three-part film adaptation based on J. R. R.
            Tolkien’s 1937 novel The Hobbit. It is followed by The Desolation of
            Smaug (2013) and The Battle of the Five Armies (2014), and together,
            they act as a prequel to Jackson's The Lord of the Rings film
            trilogy. The film's screenplay was written by Jackson, his longtime
            collaborators Fran Walsh and Philippa Boyens, and Guillermo del
            Toro, who was originally chosen to direct the film before leaving
            the project in 2010.
          </p>
          <p className="story">
            The story is set in Middle-earth sixty years before the main events
            of The Lord of the Rings, and portions of the film are adapted from
            the appendices to Tolkien's The Return of the King. An Unexpected
            Journey tells the tale of Bilbo Baggins (Martin Freeman), who is
            convinced by the wizard Gandalf (Ian McKellen) to accompany thirteen
            Dwarves, led by Thorin Oakenshield (Richard Armitage), on a quest to
            reclaim the Lonely Mountain from the dragon Smaug.
          </p>
          <p className="story">
            The ensemble cast also includes Ken Stott, Cate Blanchett, Ian Holm,
            Christopher Lee, Hugo Weaving, James Nesbitt, Elijah Wood, and Andy
            Serkis, and features Sylvester McCoy, Barry Humphries and Manu
            Bennett. An Unexpected Journey premiered on 28 November 2012 in New
            Zealand and was released internationally on 12 December 2012, almost
            9 years after the release of The Lord of the Rings: The Return of
            the King.
          </p>
          <p className="story">
            The film grossed over $1.017 billion at the box office, surpassing
            both The Fellowship of the Ring and The Two Towers nominally,
            becoming the fourth highest-grossing film of 2012. Receiving mixed
            reviews from critics, the film was nominated for three Academy
            Awards for Best Visual Effects, Best Production Design, and Best
            Makeup and Hairstyling. It was also nominated for three British
            Academy Film Awards.
          </p>
        </>
      );

    case "The Desolation of Smaug":
      return (
        <>
          <p className="story">
            'The Hobbit: The Desolation of Smaug' is a 2013 epic high-fantasy
            adventure film directed by Peter Jackson and produced by WingNut
            Films in collaboration with New Line Cinema, Warner Bros. Pictures
            and Metro-Goldwyn-Mayer. Warner Bros. Pictures served also as the
            distributor of this second instalment in the three-part film series
            based on the novel The Hobbit by J. R. R. Tolkien. The film was
            preceded by An Unexpected Journey (2012) and followed by The Battle
            of the Five Armies (2014); together they operate as a prequel to
            Jackson's The Lord of the Rings film trilogy.
          </p>
          <p className="story">
            {" "}
            The film follows the titular character Bilbo Baggins as he
            accompanies Thorin Oakenshield and his fellow dwarves on a quest to
            reclaim the Lonely Mountain from the dragon Smaug. The film also
            features the vengeful pursuit of Azog the Defiler and Bolg, while
            Gandalf the Grey investigates a growing evil in the ruins of Dol
            Guldur.{" "}
          </p>
          <p className="story">
            The ensemble cast includes Ian McKellen, Martin Freeman, Richard
            Armitage, Benedict Cumberbatch, Evangeline Lilly, Lee Pace, Luke
            Evans, Ken Stott, James Nesbitt, and Orlando Bloom. Fran Walsh,
            Philippa Boyens, Peter Jackson and Guillermo del Toro wrote the
            screenplay. The films were shot simultaneously in 3D at a projection
            rate of 48 frames per second, with principal photography taking
            place around New Zealand and at Pinewood Studios. Additional filming
            took place throughout May 2013.
          </p>
          <p className="story">
            'The Hobbit: The Desolation of Smaug' premiered on 2 December 2013
            in Los Angeles and was released internationally on 11 December 2013
            in both conventional and IMAX theatres. The film received mostly
            positive reviews and has grossed over $959 million at the worldwide
            box office, surpassing both The Fellowship of the Ring and The Two
            Towers, making it the fourth highest-grossing film of 2013.
          </p>
        </>
      );
    case "The Battle of the Five Armies":
      return (
        <>
          <p className="story">
            'The Hobbit: The Battle of the Five Armies' is a 2014 epic high
            fantasy film directed by Peter Jackson and written by Jackson, Fran
            Walsh, Philippa Boyens, and Guillermo del Toro. It is the third and
            final instalment in Peter Jackson's three-part film adaptation based
            on the novel 'The Hobbit' by J. R. R. Tolkien, following 'An
            Unexpected Journey' (2012) and 'The Desolation of Smaug' (2013), and
            altogether, they act as a prequel to Jackson's 'The Lord of the
            Rings' film trilogy. It was produced by New Line Cinema,
            Metro-Goldwyn-Mayer, Warner Bros. Pictures and WingNut Films. Warner
            Bros. served also as the distributor.{" "}
          </p>
          <p className="story">
            'The Battle of the Five Armies' premiered in London on 1 December
            2014, and was then released on 11 December 2014 in New Zealand, 12
            December 2014 in the United Kingdom, and on 17 December 2014 in the
            United States. It stars Martin Freeman, Ian McKellen, Richard
            Armitage, Evangeline Lilly, Luke Evans, Lee Pace, Benedict
            Cumberbatch, Ken Stott, Aidan Turner, Dean O'Gorman, Billy Connolly,
            Graham McTavish, James Nesbitt, Stephen Fry and Ryan Gage. The
            ensemble cast also features Cate Blanchett, Ian Holm, Christopher
            Lee, Hugo Weaving, and Orlando Bloom. It was Holm's final film
            before his death in 2020, as well as Lee's final live-action role,
            although he would be featured as a voice actor in several films
            released after his death in 2015.
          </p>
          <p className="story">
            {" "}
            The film received mixed reviews from critics and grossed over $962
            million worldwide, making it the second highest-grossing film of
            2014 (behind Transformers: Age of Extinction). At the 87th Academy
            Awards, the film received a nomination for Best Sound Editing.
          </p>
        </>
      );
    case "The Fellowship of the Ring":
      return (
        <>
          <p className="story">
            'The Lord of the Rings: The Fellowship of the Ring' is a 2001 epic
            fantasy adventure film directed by Peter Jackson, based on the 1954
            novel 'The Fellowship of the Ring', the first volume of J. R. R.
            Tolkien's 'The Lord of the Rings'. The film is the first installment
            in the Lord of the Rings trilogy. It was produced by Barrie M.
            Osborne, Jackson, Fran Walsh and Tim Sanders, and written by Walsh,
            Philippa Boyens and Jackson.
          </p>
          <p className="story">
            {" "}
            The film features an ensemble cast including Elijah Wood, Ian
            McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett,
            John Rhys-Davies, Billy Boyd, Dominic Monaghan, Orlando Bloom,
            Christopher Lee, Hugo Weaving, Sean Bean, Ian Holm, and Andy Serkis.
            It was followed in 2002 by 'The Two Towers' and in 2003 by 'The
            Return of the King'.
          </p>
          <p className="story">
            {" "}
            Set in Middle-earth, the story tells of the Dark Lord Sauron, who
            seeks the One Ring, which contains part of his soul, in order to
            return to power. The Ring has found its way to the young hobbit
            Frodo Baggins. The fate of Middle-earth hangs in the balance as
            Frodo and eight companions (who form the Fellowship of the Ring)
            begin their journey to Mount Doom in the land of Mordor, the only
            place where the Ring can be destroyed.{" "}
          </p>
          <p className="story">
            'The Fellowship of the Ring' was cofinanced and distributed by
            American studio New Line Cinema, but filmed and edited entirely in
            Jackson's native New Zealand, concurrently with the other two parts
            of the trilogy. It premiered on 10 December 2001 at the Odeon
            Leicester Square in London and was theatrically released worldwide
            on 19 December 2001.
          </p>
          <p className="story">
            {" "}
            The film was acclaimed by critics and fans alike, who considered it
            to be a landmark in filmmaking and an achievement in the fantasy
            film genre. It received praise for its visual effects, performances,
            Jackson's direction, screenplay, and faithfulness to the source
            material. It grossed $880 million worldwide in its initial release,
            making it the second highest-grossing film of 2001 and the fifth
            highest-grossing film of all time at the time of its release.
            Following subsequent reissues, it has as of 2021 grossed over $897
            million. 'The Fellowship of the Ring', like its successors, is
            widely regarded as one of the greatest and most influential films
            ever made. The film received numerous accolades; at the 74th Academy
            Awards, it was nominated for thirteen awards, including Best
            Picture, Best Director, Best Adapted Screenplay, Best Supporting
            Actor for McKellen, Best Art Direction, Best Costume Design, Best
            Film Editing, Best Original Song for 'May It Be' and Best Sound,
            winning four: Best Cinematography, Best Makeup, Best Original Score
            and Best Visual Effects.
          </p>
          <p className="story">
            {" "}
            In 2021, the film was selected for preservation in the United States
            National Film Registry by the Library of Congress for being
            culturally, historically, or aesthetically significant.
          </p>
        </>
      );
    case "The Two Towers ":
      return (
        <>
          <p className="story">
            'The Lord of the Rings: The Two Towers' is a 2002 epic fantasy
            adventure film directed by Peter Jackson, based on the second volume
            of J. R. R. Tolkien's 'The Lord of the Rings'. The film is the
            second instalment in the Lord of the Rings trilogy and was produced
            by Barrie M. Osborne, Fran Walsh and Jackson, from a screenplay by
            Walsh, Philippa Boyens, Stephen Sinclair and Jackson.{" "}
          </p>
          <p className="story">
            The film features an ensemble cast including Elijah Wood, Ian
            McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett,
            John Rhys-Davies, Bernard Hill, Christopher Lee, Billy Boyd, Dominic
            Monaghan, Orlando Bloom, Hugo Weaving, Miranda Otto, David Wenham,
            Brad Dourif, Karl Urban and Andy Serkis. It was preceded by The
            Fellowship of the Ring (2001) and followed by The Return of the King
            (2003).{" "}
          </p>
          <p className="story">
            Continuing the plot of The Fellowship of the Ring, the film
            intercuts three storylines. Frodo and Sam continue their journey
            towards Mordor to destroy the One Ring, meeting and joined by
            Gollum, the ring's former keeper. Aragorn, Legolas, and Gimli come
            to the war-torn nation of Rohan and are reunited with the
            resurrected Gandalf, before fighting against the legions of the
            treacherous wizard Saruman at the Battle of Helm's Deep. Merry and
            Pippin escape capture, meet Treebeard the Ent, and help to plan an
            attack on Isengard, fortress of Saruman.{" "}
          </p>
          <p className="story">
            'The Two Towers' was financed and distributed by American studio New
            Line Cinema, but filmed and edited entirely in Jackson's native New
            Zealand, concurrently with the other two parts of the trilogy. It
            premiered on 5 December 2002 at the Ziegfeld Theatre in New York
            City and was theatrically released on 18 December 2002 in the United
            States, and on 19 December 2002 in New Zealand.
          </p>
          <p className="story">
            {" "}
            The film was acclaimed by both critics and audiences, who considered
            it to be a landmark in filmmaking and an achievement in the fantasy
            film genre. It received praise for its direction, action sequences,
            performances, and CGI, particularly for Gollum. It grossed $936
            million worldwide, making it the highest-grossing film of 2002 and
            the third highest-grossing film of all time at the time of its
            release. Following subsequent reissues, it has, as of 2021, grossed
            over $947 million.{" "}
          </p>
          <p className="story">
            'The Two Towers', like the other films in the trilogy, is widely
            regarded as one of the greatest and most influential films ever
            made. The film received numerous accolades; at the 75th Academy
            Awards, it was nominated for six awards, including Best Picture,
            winning for Best Sound Editing and Best Visual Effects.
          </p>
        </>
      );
    case "The Return of the King":
      return (
        <>
          <p className="story">
            'The Lord of the Rings: The Return of the King' is a 2003 epic
            fantasy adventure film directed by Peter Jackson, based on the third
            volume of J. R. R. Tolkien's The Lord of the Rings. The film is the
            final entry in the Lord of the Rings trilogy and was produced by
            Barrie M. Osborne, Jackson and Fran Walsh, from a screenplay by
            Walsh, Philippa Boyens and Jackson.
          </p>
          <p className="story">
            {" "}
            Continuing the plot of The Two Towers, Frodo, Sam and Gollum are
            making their final way toward Mount Doom in Mordor in order to
            destroy the One Ring, unaware of Gollum's true intentions, while
            Gandalf, Aragorn, Legolas, Gimli and the rest are joining forces
            together against Sauron and his legions in Minas Tirith.
          </p>
          <p className="story">
            {" "}
            It was preceded by 'The Fellowship of the Ring' (2001) and 'The Two
            Towers' (2002). The film features an ensemble cast including Elijah
            Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate
            Blanchett, John Rhys-Davies, Bernard Hill, Billy Boyd, Dominic
            Monaghan, Orlando Bloom, Hugo Weaving, Miranda Otto, David Wenham,
            Karl Urban, John Noble, Andy Serkis, Ian Holm, and Sean Bean. 'The
            Return of the King' was financed and distributed by American studio
            New Line Cinema, but filmed and edited entirely in Jackson's native
            New Zealand, concurrently with the other two parts of the trilogy.
          </p>
          <p className="story">
            {" "}
            It premiered on 1 December 2003 at the Embassy Theatre in Wellington
            and was theatrically released on 17 December 2003 in the United
            States, and on 18 December 2003 in New Zealand. The film was
            acclaimed by both critics and audiences, who considered it to be a
            landmark in filmmaking and the fantasy film genre, with praise for
            the visual effects, performances, action sequences, direction,
            screenplay, musical score, costume design and emotional depth. It
            grossed over $1.1 billion worldwide, making it the highest-grossing
            film of 2003 and the second highest-grossing film of all time at the
            time of its release, as well as the highest-grossing film released
            by New Line Cinema.
          </p>
          <p className="story">
            {" "}
            Like the other two entries in the Lord of the Rings film trilogy,
            The Return of the King is widely regarded as one of the greatest and
            most influential films ever made. The film received numerous
            accolades; at the 76th Academy Awards, it won all 11 Oscars for
            which it was nominated, including Best Picture, tying the film with
            Ben-Hur and Titanic as the movie with the most Oscar wins. It also
            became the second film series whose entries have all won Best Visual
            Effects, after the original Star Wars Trilogy.
          </p>
        </>
      );
  }
}

export default Plot;
