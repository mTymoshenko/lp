<template functional>
  <section class="banner">
    <div class="banner__col banner__col-left">
      <div class="banner__col-left__text">
        Don't miss out! Ending dec. 4th
      </div>
    </div>
    <div class="banner__col banner__col-right">
      <div class="banner__col-right__text">
        <div class="banner__col-right__discount">
          50 <sub>%</sub>
        </div>
        <span class="banner__col-right__subtitle">
          off black friday sale!
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@mixin respond($resolution) {
  @if $resolution == xs {
    @media (max-width: 767px) {
      @content
    }
  };
  @if $resolution == sm {
    @media (max-width: 559px) {
      @content
    }
  };
}
@mixin flex-center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-top: 10px;
  height: 80px;
  @include respond(xs) {
    flex-direction: column;
    height: auto;
  }
  &__col {
    text-transform: uppercase;
    @include flex-center();
    width: 50%;
    font-size: 20px;
    @include respond(xs) {
      padding: 5px;
      width: 100%;
    }
    @include respond(sm) {
      font-size: 16px;
    }
    &-left {
      color: var(--main-color);
      justify-content: flex-end;
      @include respond(xs) {
        justify-content: center;
      }
      &__text {
        max-width: 200px;
        @include respond(xs) {
          max-width: 100%;
        }
      }
    }
    &-right {
      margin-left: 40px;
      color: #ff6f00;
      height: 100%;
      background : #000;
      position: relative;
      justify-content: flex-start;
      @include respond(xs) {
        justify-content: center;
        align-items: center;
        margin-left: 0;
      }
      &__discount {
        font-size: 50px;
        sub {
          position: relative;
          top: -21px;
          left: -10px;
        }
        @include respond(xs) {
          flex-basis: 50%;
          text-align: right;
        }
        @include respond(sm) {
          font-size: 40px;
          sub {
            top: -18px;
          }
        }
      }
      &__subtitle {
        @include respond(xs) {
          max-width: 150px;
        }
      }
      &__text {
        @include flex-center();
      }
      &:before {
        content:'';
        position: absolute;
        top:0;
        right:100%;
        width:0;
        height:0;
        border:40px solid #000;
        border-top-color:transparent;
        border-left-color:transparent;
        @include respond(xs) {
          right: auto;
          border: none;
          border-top: 10px solid white;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
      }
    }
  }

}
</style>
