// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/denuncias/cadastroDenuncia.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Cadastro de Denuncias</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"\"></a><div class=\"ml-auto\"><a class=\"btn btn-danger text-white\" href=\"/home\">Voltar</a></div></nav></header><main class=\"container\"><h1 class=\"text-center display-4 py-4\">Cadastro de Denuncia</h1><form class=\"needs-validation\" method=\"post\" action=\"/denuncia\" novalidate><div class=\"form-row\"><div class=\"col-md-12 mb-3\"><label for=\"nomeCidadao\">Nome</label><input type=\"text\" class=\"form-control\" id=\"nomeCidadao\" name=\"nomeCidadao\" placeholder=\"Insira o nome\" value=\"" +
    marko_escapeXmlAttr(data.usuario.nome) +
    "\" readonly><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um nome.</div></div></div><div class=\"form-row\"><div class=\"col-md-6 mb-3\"><label for=\"cpfCidadao\">CPF</label><input type=\"text\" class=\"form-control\" id=\"cpfCidadao\" name=\"cpfCidadao\" placeholder=\"999.999.999-99\" value=\"" +
    marko_escapeXmlAttr(data.usuario.cpf) +
    "\" maxlength=\"11\" readonly><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um CPF Válido.</div></div><div class=\"col-md-6 mb-3\"><label for=\"telefoneCidadao\">Telefone</label><input type=\"text\" class=\"form-control\" id=\"telefoneCidadao\" name=\"telefoneCidadao\" placeholder=\"(99)99999-9999\" value=\"" +
    marko_escapeXmlAttr(data.usuario.telefone) +
    "\" maxlength=\"11\" readonly><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um Telefone Válido.</div></div></div><h5 class=\"mb-3 text-center\">Endereço do local da denuncia</h5><div class=\"form-row\"><div class=\"col-md-6 mb-3\"><label for=\"ruaDenuncia\">Rua</label><input type=\"text\" class=\"form-control\" id=\"ruaDenuncia\" name=\"ruaDenuncia\" placeholder=\"Insira a Rua\" value=\"\" required><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um nome de rua.</div></div><div class=\"col-md-6 mb-3\"><label for=\"bairroDenuncia\">Bairro</label><input type=\"text\" class=\"form-control\" id=\"bairroDenuncia\" name=\"bairroDenuncia\" placeholder=\"Insira o Bairro.\" value=\"\" required><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um Bairro.</div></div></div><h5 class=\"mb-3 text-center\">Selecionar apenas imagens .jpeg/.jpg ou .png</h5><div class=\"row\"><div class=\"col-lg-4 col-lg-2\"><div class=\"custom-file\"><input type=\"file\" class=\"custom-file-input\" name=\"imagemDenuncia\" id=\"imagemDenuncia\" onchange=\"previewImagem()\"><label class=\"custom-file-label\" for=\"inputGroupFile04\">Choose file</label></div></div></div><div class=\"py-3\"><img class=\"img-fluid\" id=\"preview\"></div><div class=\"pb-3\"><label for=\"observacoesDenuncia\">Observações</label><textarea id=\"observacoesDenuncia\" class=\"form-control\" name=\"observacoesDenuncia\" rows=\"3\"></textarea></div><button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" onsubmit=\"unmask()\">Cadastrar</button></form></main><footer class=\"pt-3\"><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"\"><p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"/estatico/js/validacao-campos.js\"></script><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js\"></script><script>\r\n        function unmask() {\r\n            $('#cpfCidadao').unmask()\r\n            $('#telefoneCidadao').unmask()\r\n        }\r\n\r\n        $(function () {\r\n            $('#cpfCidadao').mask('000.000.000-00')\r\n            $('#telefoneCidadao').mask('(00) 00000-0000')\r\n        })\r\n\r\n        function previewImagem() {\r\n            var imagem = document.querySelector('input[name=imagemDenuncia]').files[0];\r\n            var preview = document.querySelector('#preview')\r\n\r\n            var reader = new FileReader();\r\n\r\n            reader.onloadend = function () {\r\n                preview.src = reader.result;\r\n            }\r\n\r\n            if (imagem) {\r\n                reader.readAsDataURL(imagem);\r\n            } else {\r\n                preview.src = \"\";\r\n            }\r\n        }\r\n    </script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "69");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/denuncias/cadastroDenuncia.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
