import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 1.5rem;
        color: var(--text-title);
        
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;

            p{
                line-height: 1.5rem;
            }
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3.5rem;

            span{
                font-weight: 400;
            }
        }

        &.highlight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`