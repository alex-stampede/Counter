let contadorSi = 0;
let contadorNo = 0;

const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const btnReset = document.getElementById('btnReset');
const spanContadorSi = document.getElementById('contadorSi');
const spanContadorNo = document.getElementById('contadorNo');
const spanContadorTotal = document.getElementById('contadorTotal');
const spanPorcentajeSi = document.getElementById('porcentajeSi');
const spanPorcentajeNo = document.getElementById('porcentajeNo');

btnSi.addEventListener('click', () => {
    contadorSi++;
    actualizarContadores();
});

btnNo.addEventListener('click', () => {
    contadorNo++;
    actualizarContadores();
});

btnReset.addEventListener('click', () => {
    contadorSi = 0;
    contadorNo = 0;
    actualizarContadores();
});

function actualizarContadores() {
    const total = contadorSi + contadorNo;
    const porcentajeSi = total === 0 ? 0 : ((contadorSi / total) * 100).toFixed(2);
    const porcentajeNo = total === 0 ? 0 : ((contadorNo / total) * 100).toFixed(2);

    spanContadorSi.textContent = contadorSi;
    spanContadorNo.textContent = contadorNo;
    spanContadorTotal.textContent = total;
    spanPorcentajeSi.textContent = porcentajeSi + '%';
    spanPorcentajeNo.textContent = porcentajeNo + '%';
}
