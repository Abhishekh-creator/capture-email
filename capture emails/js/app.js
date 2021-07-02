window.onload = function () {
  let emailState = false;
  let emailModal = document.querySelector(".email-modal");
  let closeButton = document.querySelector(".email-modal__close-btn");
  let emailInput = document.querySelector(".email-modal__input");
  let emailButton = document.querySelector(".email-modal__button");
  let thankContainer = document.querySelector(".email-thank");
  let declineOffer = document.querySelector(".email-modal__decline-offer");

  function emailValid(email) {
    // It checks if the email is written clearly...
    return /\S+@\S+\.\S+/.test(email);
  }

  let showModal = () => {
    if (emailState === false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  let closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let addError = () => {
    document
      .querySelector(".email-modal__form-group")
      .classList.add("email-modal__form-group--error");
    document
      .querySelector(".email-modal__error-message ")
      .classList.add("email-modal__error-message--active");
  };

  let removeError = () => {
    document
      .querySelector(".email-modal__form-group")
      .classList.remove("email-modal__form-group--error");
    document
      .querySelector(".email-modal__error-message ")
      .classList.remove("email-modal__error-message--active");
  };

  let showThankMessage = () => {
    thankContainer.classList.add("email-modal--success");
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  emailInput.addEventListener("click", () => {
    removeError();
  });

  emailButton.addEventListener("click", () => {
    if (emailValid(emailInput.value)) {
      showThankMessage();
    } else {
      addError();
    }
  });

  declineOffer.addEventListener("click", () => {
    closeModal();
  });

  closeButton.addEventListener("click", () => {
    closeModal();
  });

  document.body.addEventListener("mouseleave", () => {
    showModal();
  });
  console.log(document);
};
