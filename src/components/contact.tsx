import { ChangeEvent, useState } from "react";
import { ICostumer } from "../interface/Icostumer";
import { Button } from "./styled/button";
import { Div } from "./styled/div";
import { Input, Textarea } from "./styled/input";
import { ArticleCon, SectionContact } from "./styled/sections";

export function Contact() {
  const [sent, setSent] = useState(false);

  const [costumer, setCostumer] = useState<ICostumer>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    text: "",
  });

  //kolla efter ändringar i input fälten, spara dom i costumer
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    let name: string = e.target.name;
    setCostumer({ ...costumer, [name]: e.target.value });
  }
  // hantera textarea fältet och spara.
  function handleTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    let name: string = e.target.name;
    setCostumer({ ...costumer, [name]: e.target.value });
  }
  // hindrar sidan från att rendera om, visa att mailet är skickat.
  function Send(e: any) {
    e.preventDefault();
    setSent(true);
  }
  //stäng fliken
  function close() {
    setSent(false);
  }
  return (
    <>
      <SectionContact>
        <ArticleCon>
          <div>
            <h2>Kontakta</h2>
            Hemmaodla
            <br />
            Solskensvägen 12
            <br />
            123 45 Stockholm
            <br />
            0701 234567{" "}
          </div>
          <br />
        </ArticleCon>
        <ArticleCon>
          <form>
            <Input
              type="text"
              placeholder="firstname"
              name="firstname"
              value={costumer.firstname}
              onChange={handleInput}
            ></Input>
            <br />
            <Input
              type="text"
              placeholder="lastname"
              name="lastname"
              value={costumer.lastname}
              onChange={handleInput}
            ></Input>
            <br />
            <Input
              type="number"
              placeholder="telenr"
              name="number"
              value={costumer.phone}
              onChange={handleInput}
            ></Input>
            <br />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={costumer.email}
              onChange={handleInput}
            ></Input>
            <br />
            <Textarea
              placeholder="Skriv här"
              name="text"
              value={costumer.text}
              onChange={handleTextarea}
            ></Textarea>
            <br />
            <Button onClick={Send}>Skicka</Button>
          </form>
        </ArticleCon>

        {sent && (
          <>
            <Div>
              Medelandet har skickats.
              <br />
              Vi återkommer så snart vi kan
              <br />
              <Button onClick={close}>Stäng</Button>
            </Div>
          </>
        )}
      </SectionContact>
    </>
  );
}
