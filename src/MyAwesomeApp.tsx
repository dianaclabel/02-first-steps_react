import type { CSSProperties } from "react";

const firstName = "Diana";
const lastName = "Clabel";

const favoriteGames = ["Elden Ring", "Smash", "Metal gear"];
const isActive = true;

const address = {
  zipCode: 'ABC-123',
  country: 'Canada',
}

//CSSproperties -> es para que haya IntelliSense de css fuera de la funcion flecha myAwesomeApp
const myStyle: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 20,
  padding: 10,

}


export const MyAwesomeApp = () => {

  return (
    <div>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p className="mi-clase-favprito">{favoriteGames.join(', ')}</p>

      <h1>{isActive ? 'activo' : 'no activo'}</h1>
      {/* Para imprimir el objeto y convertirlo a string hacemos uso de JSON.stringify() */}
      <p
        style={myStyle}
      >{JSON.stringify(address)}</p>
    </div>
  )
}