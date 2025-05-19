const fs = require('fs');
const path = require('path');

/**
 * Ensures that the uploads directory exists in the public folder
 * This script can be run during build or development to make sure the directory is there
 */
function ensureUploadsDirectory() {
  try {
    // Get the public directory path
    const publicDir = path.join(process.cwd(), 'public');
    
    // Create public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
      console.log('Created public directory');
    }
    
    // Define and create uploads directory
    const uploadsDir = path.join(publicDir, 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      console.log('Created uploads directory at', uploadsDir);
    } else {
      console.log('Uploads directory already exists at', uploadsDir);
    }
    
    return true;
  } catch (error) {
    console.error('Error ensuring uploads directory exists:', error);
    return false;
  }
}

// Run the function if this script is executed directly
if (require.main === module) {
  ensureUploadsDirectory();
}

// Export for use in other files
module.exports = ensureUploadsDirectory; 