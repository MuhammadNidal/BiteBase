import { useState, useMemo } from 'react';
import { TextField, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import data from '../../Data'; // Your data file
import bitebase from '../../images/BiteBaselogo.png';
import './search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Flatten the data to include all categories
  const allCategories = useMemo(() => 
    data.flatMap(restaurant =>
      restaurant.riceDishes.map(dish => ({
        ...dish,
        restaurantName: restaurant.restaurantName,
        category: restaurant.category || 'Unknown' // Add a default category if needed
      }))
    ), [data]
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      setAnchorEl(null);
      return;
    }

    const filteredSuggestions = allCategories.filter(dish =>
      dish.name.toLowerCase().includes(value.toLowerCase()) ||
      dish.restaurantName.toLowerCase().includes(value.toLowerCase()) ||
      dish.category.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);

    // Only set anchorEl if there are suggestions to display
    if (filteredSuggestions.length > 0) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDishClick = (id) => {
    navigate(`/dish/${id}`); // Fixed template literal
    handleClose(); // Close the menu on click
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
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && suggestions.length > 0}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            style: {
              maxHeight: '400px',
              width: '100%',
              overflow: 'auto',
              transform: 'translateY(0)', 
            },
          }}
        >
          {suggestions.length > 0 ? (
            suggestions.map(dish => (
              <MenuItem key={dish.id} onClick={() => handleDishClick(dish.id)} style={{ gap: '1rem' }}>
                <ListItemIcon>
                  <img src={dish.image} alt={dish.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={`${dish.name} (${dish.restaurantName})`} // Fixed template literal
                  secondary={<Typography variant="body2" color="textSecondary">{dish.category}</Typography>} // Uncommented and fixed
                />
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No suggestions</MenuItem>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Search;
