import Layout from "../layouts/Layout.astro";
import Badge from "../components/Badge.astro";
import LinkedInIcon from "../components/icons/LinkedIn.astro";

<Fragment>
  <Layout title="Portfolio">
    <main>
      <section class="w-full mx-auto lg:w-[740px] py-44">
        <img class="rounded-full w-16 h-16" src="https://avatars.githubusercontent.com/u/124218570?v=4" alt="mifoto" />
        <h1 class="text-white text-5xl font-bold flex flex-row gap-x-4 pb-4">
          Hola soy Julio <a href="http://linkedin.com/in/julio-enrique-54234a223" target="_blank" rel="noopener" class="flex justify-center items-center">
            <Badge>Disponible</Badge>
          </a>
        </h1>
        <h2 class="text-2xl opacity-80 text-wrap">
          <span class="text-yellow-200/90">Estudiante de Ingenieria En Sistemas De Información</span>. Con ansias de empezar mi primera experiencia laboral. <span class="text-blue-300/90">De La Plata, Argentina.</span>
        </h2>
        <ul>
          <li>
            <a href="www.linkedin.com/in/julio-enrique-54234a223">
              <LinkedInIcon class="w-1 h-1">Linkedin
              </LinkedInIcon>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</Fragment>;
