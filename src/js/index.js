
const passwordDisplay = document.getElementById('passwordDisplay');
const CORRECT_PASSWORD = "1907";
let currentPassword = '';

function addNumber(number) {
    if (currentPassword.length < 4) {
        currentPassword += number;
        passwordDisplay.value += '•';

        if (currentPassword.length === 4) {
            checkPassword();
        }
    }
}

function clearPassword() {
    currentPassword = '';
    passwordDisplay.value = '';
}

function checkPassword() {
    if (currentPassword === CORRECT_PASSWORD) {
        showModal('successModal');
    } else {
        showModal('errorModal');
    }
    clearPassword();
}

function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    if (modalId === 'successModal') {
        window.location.href = "/public/dashboard.html";
    }
}
