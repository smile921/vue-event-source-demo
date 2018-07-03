 

<template>
  <div class="section">
    <div class="container">
      <h1 class="title">About Spring Boot Admin</h1>
      <h2 class="subtitle" v-if="version" v-text="`Version ${version}`"/>
      <div class="content">
        <p>
          This is an administration UI for Spring Boot applications.
        </p> 
        <p>
          If you found a bug, want to propose a feature or submit a pull request please use the
          <a href="https://github.com/codecentric/spring-boot-admin/issues">issue tracker</a>.
        </p> 
      </div>
      <h1 class="title is-5">Trademarks and Licenses</h1>
      <div class="content">
        <p>
          The source code of Spring Boot Admin is licensed under  Apache License 2.0 .
        </p>
        <p>
          Spring, Spring Boot and Spring Cloud are trademarks of  Pivotal
          Software, Inc.  in the U.S. and other countries.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      // eslint-disable-next-line no-undef
      version: __PROJECT_VERSION__
    }),
    install({viewRegistry}) {
      viewRegistry.addView({
        path: '/about',
        name: 'about',
        handle: 'About',
        order: 200,
        component: this
      });
    }
  };
</script>

<style lang="scss">
  .about-links {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 0.5rem;
    }
  }

  $stackoverflow: #f48024;
  .button.is-stackoverflow.is-outlined {
    background-color: transparent;
    border-color: $stackoverflow;
    color: $stackoverflow;

    &:hover,
    &:focus {
      background-color: $stackoverflow;
      border-color: $stackoverflow;
      color: white;
    }
  }

  $gitter: #ed1965;
  .button.is-gitter.is-outlined {
    background-color: transparent;
    border-color: $gitter;
    color: $gitter;

    &:hover,
    &:focus {
      background-color: $gitter;
      border-color: $gitter;
      color: white;
    }
  }
</style>
