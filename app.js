function getMapParametersFromCurrentUrl() {
    const hash = window.location.hash.substring(1); 
    if (hash) {
      const parts = hash.split('/');
      if (parts.length === 3) {
        const zoom = parseFloat(parts[0]);
        const x = parseFloat(parts[1]);
        const y = parseFloat(parts[2]);
        return { zoom, x, y };
      } else {
        throw new Error('Invalid hash format. Expected format: #zoom/x/y');
      }
    } else {
      throw new Error('URL does not contain a hash.');
    }
  }
