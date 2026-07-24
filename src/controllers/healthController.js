exports.checkHealth = (req, res) => {
    const healthCheck = {
        status: 'OK',
        uptime: process.uptime(), // Returns the number of seconds the Node.js process has been running
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    };
    
    try {
        res.status(200).json(healthCheck);
    } catch (error) {
        healthCheck.status = 'ERROR';
        res.status(503).json(healthCheck);
    }
};