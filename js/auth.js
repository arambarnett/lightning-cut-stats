/**
 * LightningCut Analytics Authentication
 */

// Check if user is authenticated on page load
function checkAuthentication() {
  const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
  const currentPage = window.location.pathname.split('/').pop();

  // Redirect to login if not authenticated and trying to access stats page
  if (!isAuthenticated && (currentPage === 'stats.html' || currentPage === '')) {
    window.location.href = 'index.html';
    return false;
  }
  
  // Redirect to stats if already authenticated and on login page
  if (isAuthenticated && currentPage === 'index.html') {
    window.location.href = 'stats.html';
    return true;
  }
  
  return isAuthenticated;
}

// Login function
function login(password) {
  // The required password is "investor"
  if (password === 'investor') {
    // Store authentication in session storage
    sessionStorage.setItem('authenticated', 'true');
    
    // Set last login time
    localStorage.setItem('lastLogin', new Date().toISOString());
    
    return true;
  }
  
  return false;
}

// Logout function
function logout() {
  sessionStorage.removeItem('authenticated');
  window.location.href = 'index.html';
}

// Export functions
window.lightningCutAuth = {
  check: checkAuthentication,
  login: login,
  logout: logout
};