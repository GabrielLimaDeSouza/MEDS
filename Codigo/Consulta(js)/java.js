window.onload = () =>{
    floatingSelect = document.getElementById('floatingSelect');
    floatingSelect.addEventListener('change', function() {
    especialidade= floatingSelect 
    })
    floatingSelect1 = document.getElementById('floatingSelect1');
    floatingSelect1.addEventListener('change', function() {
    hospital= floatingSelect1
    })
    floatingSelect2 = document.getElementById('floatingSelect2');
    floatingSelect2.addEventListener('change', function() {
    medico= floatingSelect2
    })
    floatingSelect3 = document.getElementById('floatingSelect3');
    floatingSelect3.addEventListener('change', function() {
    data= floatingSelect3
    })
    
    login.onsubmit = (evento) =>{
        
        console.log({medico: medico.value, especialidade: especialidade.value, data: data.value});
        localStorage.setItem ('Medico:', medico.value,);
        localStorage.setItem ('Especialidade:', especialidade.value,);
        localStorage.setItem ('Hospital', hospital.value,);
        localStorage.setItem ('Data', data.value,);
        evento.preventDefault();
    }
    
};
