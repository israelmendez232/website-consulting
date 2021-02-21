import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import AnimationRevealPage from "../components/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "../components/Layouts";
import Header from "../components/light.js";
import Footer from "../components/MiniCenteredFooter.js";
import { SectionHeading } from "../components/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Política de Privacidade" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Último update: 21/02/2021</p>

            <p>
            Esta Política e suas respectivas atualizações devem prevalecer sobre todas as políticas, propostas, contratos, entendimentos anteriores e acordos, orais ou escritos, eventualmente existentes entre as partes versando, direta ou indiretamente, sobre o tema de privacidade.
            </p>

            <p>
                As soluções contidas no site https://mendes-consulting.netlify.app/ (ou simplesmente “Plataforma”) são disponibilizadas pela Mendes Consulting (Nome fantasia), pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 79.445.886/0001-37, sediada em israel.mendez232@gmail.com.
            </p>

            <h2>A. Introdução</h2>
            <ul>
                <li>
                    <p>
                        A privacidade dos visitantes do nosso site é muito importante para nós, e estamos comprometidos em protegê-la. Esta política explica o que faremos com suas informações pessoais.
                    </p>
                </li>
                <li>
                    <p>
                        Consentir com o uso de cookies de acordo com os termos desta política, quando você acessa nosso site pela primeira vez nos permite usar cookies toda vez que você acessar nosso site.
                    </p>
                </li>
            </ul>

            <h2>B. Coleta de informações pessoais</h2>
            <p>
                Os seguintes tipos de informações pessoais podem ser coletados, armazenados e usados:
            </p>

            <ul>
                <li>
                    <p>
                        informações sobre o seu computador, incluindo seu endereço IP, localização geográfica, tipo e versão do navegador e sistema operacional;
                    </p>
                </li>
                <li>
                    <p>
                        informações sobre suas visitas e uso deste site, incluindo fonte de referência, duração da visita, visualizações de página e caminhos de navegação no site;
                    </p>
                </li>
                <li>
                    <p>
                        informações, como seu endereço de e-mail, que você digita quando se registra em nosso site;
                    </p>
                </li>
                <li>
                    <p>
                        informações que você digita ao criar um perfil em nosso site – por exemplo, seu nome, fotos de perfil, sexo, data de nascimento, status de relacionamento, interesses e hobbies, informações educacionais e de emprego;
                    </p>
                </li>
                <li>
                    <p>
                        informações, como seu nome e endereço de e-mail, que você digita para configurar assinaturas de nossos e-mails e/ou newsletters;
                    </p>
                </li>
                <li>
                    <p>
                        informações que você digita durante o uso dos serviços em nosso site;
                    </p>
                </li>
                <li>
                    <p>
                        informações geradas ao usar nosso site, incluindo quando, com que frequência e em que circunstâncias você o utiliza;
                    </p>
                </li>
                <li>
                    <p>
                        informações relacionadas a tudo o que você compra, serviços que usa ou transações que realiza através do nosso site, incluindo nome, endereço, número de telefone, endereço de e-mail e dados do cartão de crédito;
                    </p>
                </li>
                <li>
                    <p>
                        informações que você publica em nosso site com a intenção de publicá-las na internet, incluindo seu nome de usuário, fotos de perfil e o conteúdo de suas publicações;
                    </p>
                </li>
                <li>
                    <p>
                        informações contidas em quaisquer comunicações que você nos envia por e-mail ou através de nosso site, incluindo o conteúdo e os metadados da comunicação;
                    </p>
                </li>
                <li>
                    <p>
                        qualquer outra informação pessoal que você nos enviar.
                    </p>
                </li>
            </ul>
            <p>
                Antes de nos divulgar informações pessoais de outra pessoa, você deve obter o consentimento dessa pessoa para a divulgação e o processamento dessas informações pessoais de acordo com esta política.
            </p>
            

            <h2>C. Uso de suas informações pessoais</h2>
            <p>
                As informações pessoais que nos são enviadas por meio de nosso site serão usadas para os fins especificados nesta política ou nas páginas relevantes do site. Podemos usar suas informações pessoais para o seguinte:
            </p>
            
            <ul>
                <li>
                    <p>
                        administrar nosso site e nossos negócios;
                    </p>
                </li>
                <li>
                    <p>
                        personalizar nosso site para você;
                    </p>
                </li>
                <li>
                    <p>
                        possibilitar o uso dos serviços disponíveis em nosso site;
                    </p>
                </li>
                <li>
                    <p>
                        enviar produtos adquiridos através do nosso site;
                    </p>
                </li>
                <li>
                    <p>
                        prestar serviços adquiridos através do nosso site;
                    </p>
                </li>
                <li>
                    <p>
                        enviar extratos, faturas e lembretes de pagamento, bem como coletar seus pagamentos;
                    </p>
                </li>
                <li>
                    <p>
                        enviar comunicações comerciais de marketing;
                    </p>
                </li>
                <li>
                    <p>
                        enviar notificações por e-mail solicitadas especificamente por você;
                    </p>
                </li>
                <li>
                    <p>
                        enviar nossa newsletter por e-mail, caso você a tenha solicitado (você pode nos informar a qualquer momento se não quiser mais receber a newsletter);
                    </p>
                </li>
                <li>
                    <p>
                        enviar comunicações de marketing relacionadas aos nossos negócios ou aos negócios de terceiros cuidadosamente selecionados que acreditamos ser do seu interesse, por correio ou, onde você especificamente concordou com isso, por e-mail ou tecnologia semelhante (você pode nos informar a qualquer momento se não mais quiser mais receber comunicações de marketing);
                    </p>
                </li>
                <li>
                    <p>
                        fornecer à terceiros informações estatísticas sobre nossos usuários (mas esses terceiros não poderão identificar nenhum usuário individual a partir dessas informações);
                    </p>
                </li>
                <li>
                    <p>
                        lidar com perguntas e reclamações feitas por você ou sobre você em relação ao nosso site;
                    </p>
                </li>
                <li>
                    <p>
                        manter nosso site seguro e evitar fraudes;
                    </p>
                </li>
                <li>
                    <p>
                        verificar a conformidade com os termos e condições que regem o uso do nosso site (incluindo o monitoramento de mensagens privadas enviadas por meio do serviço de mensagens privadas do nosso site); e
                    </p>
                </li>
                <li>
                    <p>
                        outros usos.
                    </p>
                </li>
            </ul>
            <p>
                Se você enviar informações pessoais para publicação em nosso site, publicaremos e usaremos essas informações de acordo com a licença que você nos concedeu.
            </p>
            <p>
                Suas configurações de privacidade podem ser usadas para limitar a publicação de suas informações em nosso site e ajustadas através do uso de controles de privacidade no site. Sem seu consentimento expresso, não forneceremos suas informações pessoais a terceiros para fins de marketing direto por parte deles ou de terceiros.
            </p>

            <h2>I. Seus direitos</h2>
            <p>
                Você pode nos instruir a fornecer qualquer informação pessoal que detenhamos sobre você; o fornecimento dessas informações estará sujeito ao seguinte:
            </p>
            <ul>
              <li>fornecimento de evidência apropriada de sua identidade (para esse objetivo; geralmente aceitaremos uma cópia autenticada do seu passaporte acrescida de uma cópia original de uma fatura de serviço mostrando seu endereço atual).</li>
            </ul>
            <p>
                Podemos reter as informações pessoais solicitadas na extensão permitida por lei.
            </p>
            <p>
                Você pode nos instruir a qualquer momento para não processar suas informações pessoais para fins de marketing.
            </p>
            <p>
                Na prática, você geralmente concordará expressamente com antecedência com o uso de suas informações pessoais para fins de marketing, ou ofereceremos a oportunidade de não permitir o uso de suas informações pessoais para fins de marketing.
            </p>

            <h2>J. Sites de terceiros</h2>
            <p>
                Nosso site inclui links para detalhes de sites de terceiros. Não temos controle sobre e não somos responsáveis pelas políticas e práticas de privacidade de terceiros.
            </p>

            <h2>K. Atualização de informações</h2>
            <p>
                Informe-nos se as informações pessoais que mantemos sobre você precisam ser corrigidas ou atualizadas.
            </p>

            <h2>L. Cookies</h2>
            <p>
                Nosso site usa cookies. Um cookie é um arquivo que contém um identificador (uma sequência de letras e números) que é enviado por um servidor da web para um navegador e armazenado pelo navegador. O identificador é então enviado de volta ao servidor toda vez que o navegador solicita uma página do servidor. Os cookies podem ser cookies “persistentes” ou cookies “de sessão”: um cookie persistente será armazenado por um navegador e permanecerá válido até a data de vencimento definida, a menos que seja excluído pelo usuário antes da data de vencimento; um cookie de sessão, por outro lado, expirará no final da sessão do usuário, quando o navegador for fechado. Os cookies normalmente não contêm nenhuma informação que identifique pessoalmente um usuário, mas as informações pessoais que armazenamos sobre você podem estar vinculadas às informações armazenadas e obtidas a partir de cookies. Utilizamos cookies de sessão / cookies persistentes / cookies persistentes e de sessão em nosso site.
            </p>
            
            <ul>
                <li>
                    <p>
                        Os nomes dos cookies que usamos em nosso site e os propósitos para os quais são usados estão descritos abaixo:
                    </p>
                    <li>
                        <p>
                            usamos o Google Analytics e o Adwords em nosso site para reconhecer um computador quando um usuário acessa o site, rastrear usuários enquanto eles navegam no site, melhorar a usabilidade do site, analisar o uso do site, administrar o site, evitar fraudes e melhorar a segurança do site, personalizar o site para cada usuário, segmentar anúncios que podem ser de interesse particular para usuários específicos;
                        </p>
                    </li>
                </li>
                <li>
                    <p>
                        A maioria dos navegadores permite que você se recuse a aceitar cookies – por exemplo:
                    </p>
                    <li>
                        <p>
                            no Internet Explorer (versão 10), você pode bloquear cookies usando as configurações disponíveis de cancelamento de manipulação de cookies clicando em “Ferramentas”, “Opções da Internet” “Privacidade” e “Avançado”;
                        </p>
                    </li>
                    <li>
                        <p>
                            no Firefox (versão 24), você pode bloquear todos os cookies clicando em “Ferramentas”, “Opções”, “Privacidade”, selecionando “Usar configurações personalizadas para o histórico” no menu suspenso e desmarcando “Aceitar cookies de sites”; e
                        </p>
                    </li>
                    <li>
                        <p>
                            no Chrome (versão 29), você pode bloquear todos os cookies acessando o menu “Personalizar e controlar” e clicando em “Configurações”, “Avançado” e “Configurações do site” e, em seguida, selecionando “Bloquear cookies de terceiros” na seção “Cookies e dados do site”.
                        </p>
                    </li>
                </li>
            </ul>
            <p>
                O bloqueio de todos os cookies causará um impacto negativo na usabilidade de muitos sites. Se você bloquear os cookies, não poderá usar todos os recursos em nosso site.
            </p>
            <ul>
                <li>
                    <p>
                    Você pode excluir os cookies que já estão armazenados no seu computador – por exemplo:
                    </p>
                    <li>
                        <p>
                            no Internet Explorer (versão 10), você deve excluir os arquivos de cookies manualmente (confira instruções para fazê-lo em http://support.microsoft.com/kb/278835);
                        </p>
                    </li>
                    <li>
                        <p>
                            no Firefox (versão 24), você pode excluir os cookies clicando em “Ferramentas”, “Opções”, “Privacidade”, selecionando “Usar configurações personalizadas para o histórico”, clicando em “Mostrar cookies” e, então, em “Remover todos os cookies”; e
                        </p>
                    </li>
                    <li>
                        <p>
                            no Chrome (versão 29), você pode excluir todos os cookies acessando o menu “Personalizar e controlar” e clicando em “Configurações”, “Avançado”, “Limpar dados de navegação” e, em seguida, selecionando “Excluir cookies e outros dados de sites e plugins” antes de clicar em “Limpar dados de navegação”.
                        </p>
                    </li>
                </li>
                <li>
                    <p>
                    A exclusão de cookies causará um impacto negativo na usabilidade de muitos sites.
                    </p>
                </li>
            </ul>

            <h2>M. DADOS DE MENORES DE 13 ANOS</h2>
            <p>
                Tratamento de dados pessoais de menores: Não coletamos ou conscientemente solicitamos dados pessoais de menores de 13 anos. Se tomarmos conhecimento de que coletamos dados pessoais de um menor de 13 anos, cancelaremos a conta criada e excluiremos os dados pessoais, apenas podendo manter dados pessoais que tenham como objetivo evitar nova tentativa de cadastro.
            </p>

            <h2>N. DIREITOS COM RELAÇÃO AOS SEUS DADOS PESSOAIS</h2>
            <p>
                Direitos e Garantias: o Usuário tem direitos e garantias em relação aos seus dados pessoais. Nós disponibilizamos mecanismos, detalhados abaixo, para que os Usuários tenham clareza e transparência no exercício de seus direitos. Sempre que necessário, nossa equipe estará pronta para avaliar eventuais solicitações.
            </p>

            <p>
                Direitos Previstos na LGPD: nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018 –) (“LGPD”), você tem direito de:
            </p>
            <ul>
                <li>
                    <p>
                        confirmar que realizamos o tratamento dos seus dados pessoais;
                    </p>
                </li>
                <li>
                    <p>
                    acessar seus dados pessoais;
                    </p>
                </li>
                <li>
                    <p>
                    requerer a correção de dados pessoais que estejam incompletos, inexatos ou desatualizados;
                    </p>
                </li>
                <li>
                    <p>
                    requerer a anonimização, o bloqueio ou a eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD;
                    </p>
                </li>
                <li>
                    <p>
                    requerer a portabilidade dos seus dados pessoais a outro fornecedor de serviço ou produto, observados os nossos segredos comerciais e industriais, após a regulamentação pela Autoridade Nacional de Proteção de Dados;
                    </p>
                </li>
                <li>
                    <p>
                    requerer a eliminação dos dados pessoais tratados com base no seu consentimento, exceto nas hipóteses de conservação de dados pessoais previstas na LGPD;
                    </p>
                </li>
                <li>
                    <p>
                    requerer informações sobre com quem compartilhamos os seus dados pessoais;
                    </p>
                </li>
                <li>
                    <p>
                    requerer informações sobre a possibilidade de não fornecer o seu consentimento e as consequências;
                    </p>
                </li>
                <li>
                    <p>
                    revogar o seu consentimento para o tratamento de seus dados pessoais, quando houver tratamento realizado com base no seu consentimento;
                    </p>
                </li>
                <li>
                    <p>
                    manifestar oposição a tratamento que viole a LGPD.
                    </p>
                </li>
            </ul>

            <p>
                Informações Adicionais: antes de respondermos a uma solicitação para exercício dos direitos mencionados acima, podemos solicitar que você nos forneça algumas informações para confirmarmos sua identidade.
            </p>

            <h2>O. PRÁTICAS DE SPAM</h2>
            <p>
                Posicionamento: Somos contra toda e qualquer prática que promova SPAM de qualquer espécie e temos o compromisso de assegurar que as mensagens enviadas pela Plataforma são sempre de interesse ou importância para os respectivos destinatários. Além disso, a qualquer momento é possível optar por parar de receber e-mails, ajustando suas preferências para recebimento de e-mails ou cancelando sua conta.
            </p>
            <p>
                Orientações particulares: da mesma forma, cobramos de nossos Usuários que não pratiquem SPAM, que se certifiquem que as mensagens enviadas sejam sempre de interesse do destinatário, estando desde já cientes de que a não observância das boas práticas de uso da Internet poderá gerar o cancelamento da conta do Usuário infrator, conforme definido nos Termos de Uso, bem como a divulgação de dados pessoais de Cadastro, nos termos desta Política de Privacidade.
            </p>

            <h2>P. INFORMAÇÕES E DÚVIDAS</h2>
            <p>
                14.1. Dúvidas sobre a Política ou sobre Seus Dados Pessoais: Se após a leitura desta Política você tiver quaisquer dúvidas ou quiser apresentar alguma solicitação relativa a seus dados pessoais, você pode entrar em contato com nosso time de privacidade ou com nosso Encarregado(a) por meio deste contato: israel.mendez232@gmail.com 11944691995.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
