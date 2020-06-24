// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/home/comoDenun.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Como Denunciar?</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"img-banner\"><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"\"></a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\"><div class=\"navbar-nav ml-auto\"><button type=\"button\" class=\"nav-item btn btn-danger m-1\"><a class=\"text-white\" href=\"/login\">Entrar</a></button><button type=\"button\" class=\"nav-item btn btn-danger m-1\"><a class=\"text-white\" href=\"/cid-cadastro\">Cadastrar</a></button></div></div></nav><div class=\"container-fluid banner\"><h1>Como Denunciar</h1></div><nav class=\"menu\"><ul><li> <a href=\"/\">Home</a></li><li> <a href=\"/denuncia-cadastro\">Denunciar Agora</a></li></ul></nav></header><main class=\"container\"><h3 class=\"text-center mb-4\">Para poder denunciar um local de risco, é necessário efetuar um cadastro no sistema, fornecendo as seguintes informações:</h3><p class=\"text-justify\"><p>• Nome completo e CPF para a identificação e garantia da autenticidade das denúncias.</p><p>• Telefone e E-mail para contato e/ou envio de informações sobre o caso denunciado.</p> <p>• Uma senha que servirá para garantir que apenas o dono da conta a acesse.</p><p>Após realizar o cadastro, é preciso iniciar uma sessão com sua conta no sistema, utilizando seu E-mail como login e inserindo a senha cadastrada anteriormente.</p><p>Isto feito, basta clicar em “Denunciar Agora” e já chegará à página de denúncias</p><p>Nesta tela, deverão ser preenchidos os seguintes campos:</p><p>• Informações do Denunciante, como: nome, CPF e telefone.</p><p>• O endereço do local denunciado, contendo: Rua/Avenida, número e bairro.</p><p>O Denunciante tem como opção fazer alguma observação, como por exemplo, a respeito da gravidade da situação, da dificuldade de acesso ao local, ou da grande circulação de pessoas na área.</p><p>Também é opcional a anexação de imagens que forem úteis como primeira avaliação por parte dos agentes de saúde e responsáveis pelo trâmite da denúncia.</p></p></main><footer><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"\"><p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "48");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/home/comoDenun.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };