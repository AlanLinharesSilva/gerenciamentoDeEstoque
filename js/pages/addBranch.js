function findAdress(){
    if (cep.value.length !== 8) {
        return; 
    }
    // axios um comando parecido com fetch. tipos de metodo (get,push, put/patch, delete).
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(response => response.json())
    .then(data => {
        if  (data.erro){
            alert('CEP Invalido');
            return;
        }

        adress.value = data.logradouro;
        district.value = data.bairro;
        city.value = data.localidade;
        state.value = data.uf;
    });
    
}




function addBranch() {
    return `
        <h1>Nova Filial</h1>

        <section class="row">
            <div class="col">
            <img src="img/img_listagem.svg" width="90%">
            </div>

            <div class="col">
                <div class="card card-body bg-dark text-white">
                    <form action="">
                        <label for="name">Nome</label>
                        <input id="name" type="text" class="form-control mb-3">

                        <label for="fiscalcode">CNPJ</label>
                        <input id="fiscalcode" type="text" class="form-control mb-3">

                        <label for="cep">CEP</label>
                        <input onblur="findAdress()" id="cep" type="text" class="form-control mb-3">

                        <label for="adress">Endereco</label>
                        <input id="adress" type="text" class="form-control mb-3">

                        <label for="number">Numero</label>
                        <input id="number" type="text" class="form-control mb-3">

                        <label for="district">Bairro</label>
                        <input id="district" type="text" class="form-control mb-3">

                        <label for="city">Cidade</label>
                        <input id="city" type="text" class="form-control mb-3">

                        <label for="state">Estado</label>
                        <input id="state" type="text" class="form-control mb-3">

                        <div class="d-grid">
                            <button class="btn btn-primary btn-lg">PRONTO</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    
    `;
}