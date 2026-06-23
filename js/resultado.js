const parametros =
    new URLSearchParams(
        window.location.search
    );

const lista =
    document.querySelector(
        "#listaDatos"
    );

lista.innerHTML = `
    <li>
        <strong>Nombre:</strong>
        ${parametros.get("nombre")}
    </li>

    <li>
        <strong>Email:</strong>
        ${parametros.get("email")}
    </li>

    <li>
        <strong>Edad:</strong>
        ${parametros.get("edad")}
    </li>

    <li>
        <strong>País:</strong>
        ${parametros.get("pais")}
    </li>
`;