
document.addEventListener("DOMContentLoaded", function () {

    // Tahun otomatis di footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Tombol produk mengisi pesan kontak
    const productButtons = document.querySelectorAll(".product-button");

    productButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productName = button.dataset.product;
            const message = document.getElementById("pesan");

            if (message) {
                message.value = "Saya ingin bertanya tentang " + productName;
            }

            document.getElementById("kontak").scrollIntoView({
                behavior: "smooth"
            });

            setTimeout(function () {
                document.getElementById("nama").focus({
                    preventScroll: true
                });
            }, 500);
        });
    });

    // Form kontak demo
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const nama = document.getElementById("nama").value.trim();

            formMessage.textContent =
                "Terima kasih, " + nama +
                "! Form berhasil diisi. Ini masih demo website.";

            formMessage.className = "mt-3 text-success";
            contactForm.reset();
        });
    }

    // Tutup menu navigasi pada layar mobile
    const navLinks = document.querySelectorAll("#menu .nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const menu = document.getElementById("menu");

            if (menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

});
