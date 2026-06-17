const formulario =
    document.querySelector("#formulario");

formulario.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const nombre =
            document.querySelector("#nombre")
                .value.trim();

        const email =
            document.querySelector("#email")
                .value.trim();

        const edad =
            Number(
                document.querySelector("#edad")
                    .value
            );

        const pais =
            document.querySelector("#pais")
                .value;

        const terminos =
            document.querySelector("#terminos")
                .checked;

        if (nombre.length < 5) {

            alert(
                "El nombre debe tener al menos 5 caracteres"
            );

            return;
        }

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {

            alert(
                "Email inválido"
            );

            return;
        }

        if (
            edad < 18 ||
            edad > 60
        ) {

            alert(
                "La edad debe estar entre 18 y 60 años"
            );

            return;
        }

        if (pais === "") {

            alert(
                "Seleccione un país"
            );

            return;
        }

        if (!terminos) {

            alert(
                "Debe aceptar los términos"
            );

            return;
        }

        window.location.href =
            `resultado.html?nombre=${nombre}&email=${email}&edad=${edad}&pais=${pais}`;

    });