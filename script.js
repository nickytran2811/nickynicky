// Khởi tạo AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
    once: true
  });
  
  // Cải thiện hiệu ứng hiển thị các phần khi cuộn xuống
  document.addEventListener("scroll", function() {
    document.querySelectorAll("section").forEach(function(section) {
      if (isInViewport(section)) {
        section.classList.add("visible");
      }
    });
  });
  
  // Kiểm tra xem phần tử có trong viewport không
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  let lastScrollY = window.scrollY;
  const floatingIcons = document.querySelector('.floating-icons');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Khi cuộn xuống
      floatingIcons.style.opacity = '0'; // Ẩn icon
      floatingIcons.style.right = '-50px'; // Di chuyển icon ra ngoài màn hình
    } else {
      // Khi cuộn lên
      floatingIcons.style.opacity = '1'; // Hiện icon
      floatingIcons.style.right = '10px'; // Đưa icon về vị trí cũ
    }
    lastScrollY = window.scrollY;
  });
  
   