import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        similique consectetur minima veritatis unde, incidunt optio, molestias
        perferendis enim facilis explicabo assumenda quo aspernatur. Iste non
        natus quis ab sint nisi sapiente, fugit dolorem labore reiciendis omnis
        nemo corporis, necessitatibus voluptate porro quia a sunt, facilis rem.
        Nisi magnam nobis adipisci culpa voluptates quibusdam excepturi
        laudantium maiores veritatis <Link to="/products">tenetur</Link>, quos
        ut alias facilis. Labore eius sit quos aut iure quidem enim ex ipsa
        accusantium saepe? Nemo libero unde consequatur tempore impedit quos
        sapiente laboriosam pariatur sint asperiores neque perspiciatis quod,
        fugit distinctio inventore eum commodi voluptas molestiae officia quis
        beatae!
      </p>
    </>
  );
}

export default Home;
