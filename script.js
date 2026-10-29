document.addEventListener('DOMContentLoaded', () => {
    // Ініціалізація Lucide іконок
    lucide.createIcons();

    // Керування мобільним меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

/**
 * Перемикання між сторінками (SPA навігація)
 * @param {string} pageId - ID сторінки для відображення
 */
function showPage(pageId) {
    // Ховаємо всі сторінки
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });

    // Показуємо вибрану сторінку
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
    }

    // Оновлюємо підсвітку в меню
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        if (btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Закриваємо мобільне меню при переході
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }

    // Прокручуємо до верху сторінки
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Обробка відправки форми запису
 * @param {Event} event 
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Симуляція успішної відправки заявки
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // Очищення форми
    const form = document.getElementById('bookingForm');
    if (form) {
        form.reset();
    }
}

/**
 * Закриття модального вікна
 */
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const iconBg = button.querySelector('.faq-icon-bg');
    const icon = button.querySelector('.faq-icon');

    if (answer.classList.contains('hidden')) {
        // Відкриваємо
        answer.classList.remove('hidden');
        iconBg.classList.add('bg-sage-600', 'text-white');
        iconBg.classList.remove('bg-sage-600/50', 'text-sage-200');
        icon.textContent = '−';
    } else {
        // Закриваємо
        answer.classList.add('hidden');
        iconBg.classList.remove('bg-sage-600', 'text-white');
        iconBg.classList.add('bg-sage-600/50', 'text-sage-200');
        icon.textContent = '+';
    }
}
function handleBookingSubmit(event) {
    event.preventDefault();
    alert('Дякую! Ваша заявка прийнята. Тетяна зв’яжеться з вами найближчим часом.');
    showPage('home');
}