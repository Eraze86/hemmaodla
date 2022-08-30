import { Img } from "./styled/img";
import { Article, Section, Welcome } from "./styled/sections";
import pots from "../Img/jord.jpg";
import herbs from "../Img/kryddor.jpg";
import pall from "../Img/pallkrage.jpg";

export function Home() {
  return (
    <>
      <Welcome>
        <h1>Välkommen till hemmaodla!</h1>

        <p>
          Här tipsar vi om alla möjliga sätt att odla på. Vad man ska tänka på,
          undvika och hur man börja med hydroponisk odling
        </p>
      </Welcome>
      <Section>
        <Article>
          <div>
            <h2>Odla i kruka</h2>
            Man kan odla i krukor både inomhus och utomhus. Perfekt när man ej
            har utrymme att odla direkt i jord. Det går att odla det mesta text
            tomater, potatis osv.
          </div>
          <div>
            <Img src={pots} />
          </div>
        </Article>
        <Article>
          <div>
            <h2>Odla örter inomhus</h2>
            Kryddor är det enklaste man kan odla, och det går hur bra som helst
            att odla i fönster. Det som går snabbast är att odla det direkt i
            vatten. Även sallad fungerar utmärkt till detta och det växer fort.
            man kan odla året om på detta vis.
          </div>
          <div>
            <Img src={herbs} />
          </div>
        </Article>
        <Article>
          <div>
            <h2>Odla i pallkrage</h2>
            Man kan odla i krukor både inomhus och utomhus. Perfekt när man ej
            har utrymme att odla direkt i jord. Det går att odla det mesta text
            tomater, potatis osv.
          </div>
          <div>
            <Img src={pall} />
          </div>
        </Article>
      </Section>
    </>
  );
}
