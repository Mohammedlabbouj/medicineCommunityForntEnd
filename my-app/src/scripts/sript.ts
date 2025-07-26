// Initialize Lucide icons
lucide.createIcons();

// Handle mobile sidebar toggle
const mobileSidebarToggle = document.getElementById("mobile-sidebar-toggle");
const sidebar = document.querySelector("aside");
const sidebarOverlay = document.getElementById("sidebar-overlay");

mobileSidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("fixed"); // Ensure it's fixed when shown
  sidebar.classList.toggle("w-full"); // Make it full width on mobile
  sidebar.classList.toggle("left-0");
  sidebar.classList.toggle("bottom-0");
  sidebar.classList.toggle("z-50"); // Bring to front
  sidebarOverlay.classList.toggle("hidden");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  sidebar.classList.remove("fixed", "w-full", "left-0", "bottom-0", "z-50");
  sidebarOverlay.classList.add("hidden");
});

// Add responsiveness for sidebar on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    // md breakpoint in Tailwind is 768px
    sidebar.classList.remove(
      "hidden",
      "fixed",
      "w-full",
      "left-0",
      "bottom-0",
      "z-50"
    );
    sidebarOverlay.classList.add("hidden");
  } else {
    // Ensure it's hidden if resized to small, but only if not explicitly opened
    if (!sidebar.classList.contains("flex")) {
      // Check if it's not opened as a flex item
      sidebar.classList.add("hidden");
    }
  }
});
