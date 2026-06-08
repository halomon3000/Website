import { Outlet, Link, useLocation } from 'react-router-dom';

export function StockLayout() {
    const location = useLocation();

    // Helper function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div style={layoutContainerStyle}>

            {/* 1. SIDE NAVIGATION BAR */}
            <aside style={sidebarStyle}>
                <div style={logoAreaStyle}>
                    <span style={{ fontSize: '1.5rem' }}>📈</span>
                    <h2 style={sidebarHeadingStyle}>Stock Terminal</h2>
                </div>

                <nav style={navGroupStyle}>
                    <Link to="/Stock/Dashboards" style={navLinkStyle(isActive('/Stock/Dashboards'))}>
                        <span style={iconStyle}>🖥️</span> Dashboards
                    </Link>
                    <Link to="/Stock/Live" style={navLinkStyle(isActive('/Stock/Live'))}>
                        <span style={iconStyle}>🔴</span> Live Data
                    </Link>
                    <Link to="/Stock/Trends" style={navLinkStyle(isActive('/Stock/Trends'))}>
                        <span style={iconStyle}>📊</span> Trends & Analytics
                    </Link>
                    <Link to="/Stock/Reports" style={navLinkStyle(isActive('/Stock/Reports'))}>
                        <span style={iconStyle}>📋</span> Market Reports
                    </Link>
                    <Link to="/Stock/Alarms" style={navLinkStyle(isActive('/Stock/Alarms'))}>
                        <span style={iconStyle}>⏰</span> Price Alarms
                    </Link>
                </nav>

                <div style={connectionStatusStyle}>
                    <span style={statusDotStyle}></span> Live Feed Connected
                </div>
            </aside>

            <div style={mainContentWrapperStyle}>

                <header style={topSubHeaderStyle}>
                    <div style={tickerItemStyle}><strong>DJIA:</strong> <span style={{ color: '#00b074' }}>+0.42%</span></div>
                    <div style={tickerItemStyle}><strong>S&P 500:</strong> <span style={{ color: '#00b074' }}>+0.18%</span></div>
                    <div style={tickerItemStyle}><strong>NASDAQ:</strong> <span style={{ color: '#ff4d4f' }}>-0.12%</span></div>
                </header>

                <main style={mainContentBodyStyle}>
                    <Outlet />
                </main>

            </div>
        </div>
    );
}

// --- INLINE STYLES (Clean UI Design) ---

const layoutContainerStyle = {
    display: 'flex',
    minHeight: 'calc(100vh - 70px)', // Adjusts cleanly if your main Layout navbar is ~70px tall
    backgroundColor: '#f8f9fa',
    fontFamily: 'system-ui, -apple-system, sans-serif'
};

const sidebarStyle = {
    width: '260px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e9ecef',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between' // Pushes status indicator to the bottom
};

const logoAreaStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '32px',
    paddingLeft: '8px'
};

const sidebarHeadingStyle = {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#1a1d20',
    margin: 0
};

const navGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flexGrow: 1
};

const navLinkStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: active ? '600' : '500',
    color: active ? '#0066cc' : '#495057',
    backgroundColor: active ? '#e6f0fa' : 'transparent',
    transition: 'all 0.15s ease'
});

const iconStyle = {
    marginRight: '12px',
    fontSize: '1.1rem'
};

const mainContentWrapperStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
};

const topSubHeaderStyle = {
    height: '48px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e9ecef',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    gap: '24px',
    fontSize: '0.85rem'
};

const tickerItemStyle = {
    backgroundColor: '#f1f3f5',
    padding: '4px 12px',
    borderRadius: '4px'
};

const mainContentBodyStyle = {
    padding: '32px',
    flex: 1,
    overflowY: 'auto'
};

const connectionStatusStyle = {
    fontSize: '0.8rem',
    color: '#6c757d',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingLeft: '8px'
};

const statusDotStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: '#00b074',
    borderRadius: '50%',
    display: 'inline-block'
};