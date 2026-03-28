import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
    const [isImportMoved, setIsImportMoved] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ added
    const navigate = useNavigate();
    const location = useLocation();
    
    const isCreatePage = location.pathname==='/create';
    const handleCreateForm=()=>{
        if(isCreatePage){
            navigate('/');
        }else{
            navigate('/create');
        }
        setIsMenuOpen(false); // ✅ close menu on navigate
    }
    return (
        <>
            {/* overlay — tap outside to close */}
            {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}

            <header className="headerStyle">
                <h1>Itinify</h1>

                {/* burger button — hidden on desktop via CSS */}
                <button
                    className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
                
                <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>

                    <div className="desktop-only" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <button className='baseButtonStyle'
                            style={{
                                backgroundColor: isImportMoved ? '#6c757d' : '#f9f9f9',
                                color: isImportMoved ? 'white' : 'black',
                                transform: isImportMoved ? 'translateX(-230px)' : 'translateX(0)',
                                zIndex: 10
                            }} 
                            onClick={() => setIsImportMoved(!isImportMoved)}
                        >
                            {isImportMoved ? 'Scan' : 'Import'}
                        </button>
                        <div style={{ 
                            position: 'absolute',
                            left: '-160px',
                            display: 'flex', 
                            gap: '8px',
                            opacity: isImportMoved ? 1 : 0,
                            visibility: isImportMoved ? 'visible' : 'hidden',
                            transition: 'opacity 0.3s ease-in-out',
                            pointerEvents: isImportMoved ? 'auto' : 'none'
                        }}>
                            <input 
                                type="text" 
                                placeholder="Code..." 
                                style={{ padding: '8px', width: '120px', borderRadius: '4px', border: '1px solid #ccc' }} 
                            />
                            <button className="baseButtonStyle" style={{ backgroundColor: '#28a745', color: 'white' }}>
                                Confirm
                            </button>
                        </div>
                    </div>

                    <button className="desktop-only baseButtonStyle" style={{  border: 'none', backgroundColor: isCreatePage ? '#333' : '#007bff', color: 'white' }} onClick={handleCreateForm}>
                        {isCreatePage ? 'Home' : 'Create'}
                    </button>

                    {/* ── Mobile dropdown items ── */}
                    <button className="mobile-only baseButtonStyle" style={{  backgroundColor: '#6c757d', color: 'white', border: 'none' }}>
                        Scan
                    </button>

                    <div className="mobile-only import-row">
                        <input 
                            type="text" 
                            placeholder="Code..." 
                            style={{ padding: '8px 20px', borderRadius: '4px', border: '1px solid #ccc' }} 
                        />
                        <button className="baseButtonStyle" style={{  backgroundColor: '#28a745', color: 'white', padding: '8px 30px'}}>
                            Confirm
                        </button>
                    </div>

                    <button className="mobile-only baseButtonStyle" style={{ border: 'none', backgroundColor: isCreatePage ? '#333' : '#007bff', color: 'white', textAlign:'center' }} onClick={handleCreateForm}>
                        {isCreatePage ? 'Home' : 'Create'}
                    </button>

                </nav>
            </header>
        </>
    );
}
export default Header;