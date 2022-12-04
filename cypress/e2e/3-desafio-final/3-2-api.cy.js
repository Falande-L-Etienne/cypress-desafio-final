///<reference types="cypress"/>

describe('Funcionalidade: Cadastro e Listar cupons', () => {
    it('Deve fazer o cadastro com sucesso', () => {
        var nomeCupom = `cupom${Math.floor(Math.random()*10000)}teste`

        cy.request({
            method: 'POST',
            url: '/rest-api/docs/#/coupons/post_wc_v3_coupons',
            body: {
                "code": nomeCupom,
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
            }
        }).then(($response) => {
            expect($response.status).to.equal(200)
        })
    });

    it('Deve listar os cupons cadastrados', () => {
        const option = {
            method: 'GET',
            url: '/rest-api/docs/#/coupons/get_wc_v3_coupons',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }

        cy.request(option).then(($response) => {
            expect($response.status).to.equal(200)
        })
    });
});