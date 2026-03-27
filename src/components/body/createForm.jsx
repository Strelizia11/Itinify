function Create() {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
        margin: '2rem auto', // Centers the form and gives space from header
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Create New Itinerary</h2>
            <form style={formStyle}>
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    type="text" 
                    placeholder="Enter trip title..." 
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                
                <button type="submit" style={{ 
                    padding: '10px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Create;