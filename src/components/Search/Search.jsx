import { useState } from 'react';
import { TextField, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import data from '../../Data'; // Your data file
import bitebase from '../../images/BiteBaselogo.png';
import './search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Combine and prepare all menu items from the data
  const allCategories = data.reduce((acc, restaurant) => {
    const menuItemsWithRestaurant = restaurant.menuItems.map(dish => ({
      ...dish,
      restaurantName: restaurant.name,
      category: dish.category || 'Unknown', // Add a default category if needed
    }));
    return acc.concat(menuItemsWithRestaurant);
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = allCategories.filter(dish =>
      dish.name.toLowerCase().includes(value.toLowerCase()) ||
      dish.restaurantName.toLowerCase().includes(value.toLowerCase()) ||
      dish.category.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleDishClick = (id) => {
    navigate(`/dish/${id}`);
    setSuggestions([]); // Clear suggestions on click
  };
  

  return (
    <div className="search_container">
      <div className="search_logo">
        <img src={bitebase} alt="Logo" className="navbar-logo-icon" />
      </div>
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a dish or category..."
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'green',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'green',
              },
            },
          }}
        />
        {/* Conditionally render suggestions directly below the input field */}
        {suggestions.length > 0 && (
          <div className="suggestions_list" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', zIndex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            {suggestions.map(dish => (
              <MenuItem key={dish.id} onClick={() => handleDishClick(dish.id)} style={{ gap: '1rem' }}>
                <ListItemIcon>
                  <img src={dish.image} alt={dish.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                </ListItemIcon>
                <ListItemText 
  primary={`${dish.name} (${dish.restaurantName})`} 
/>

              </MenuItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;