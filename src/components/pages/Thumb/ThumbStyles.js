import styled from "styled-components";

export const Image = styled.img`
    // width: 100%;
    // max-width: 720px;
    // transition: all 0.3s;
    // object-fit: cover;
    // boarder-radius: 20px;
    // animation: animateThumb 0.5s;

    width: 200px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    transition: all 0.3s;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb{
        from {
            opacity: 0;
        }      
        to{
            opacity: 1; 
        }
    }
`;