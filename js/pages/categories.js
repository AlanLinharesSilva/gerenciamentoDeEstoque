function categories() {
    let data = [1,2,3,4,5].map( (item) => {
        return `
            <tr>

                <td>${item}</td>

                <td>Informatica</td>

                <td>Descricao</td>

                <td>Foto</td>
              
                <td>
                    <button>Editar</button>
                    <button>Excluir</button>
                </td>

            </tr>
        `;
    
    } );



    return`
        <h1>Listar Categorias</h1>
        <hr>

        <table class="table table-hover table-striped">

            <thead class="table-dark">

                <tr>

                    <th>#Ref</th>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Foto</th>
                    <th>Acoes</th>


                </thead>

            </thead>

            <tbody> 
            
                ${data.join('')};
            
            </tbody>

        </table>

        

    `;
        
}