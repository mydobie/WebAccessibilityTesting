/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement, PropsWithChildren } from 'react';
import {
  BugFill,
  CheckCircleFill,
  ExclamationCircle,
  Plus as BsiPlus,
} from 'react-bootstrap-icons';
import {
  Alert as BSAlert,
  Overlay,
  Popover as BSPopOver,
} from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';

import CloseButton from 'react-bootstrap/CloseButton';

import styled from 'styled-components';

const Alert = styled(BSAlert)`
  position: absolute;
  left: 0;
  padding: ${(props: { $hasPopOver: boolean }) =>
    props.$hasPopOver ? '0' : '10px'};

  border: ${(props: { $hasPopOver: boolean }) =>
    props.$hasPopOver ? '1px solid var(--bs-alert-border-color)' : '0'};

  background-color: ${(props: { $hasPopOver: boolean }) =>
    props.$hasPopOver ? 'var(--bs-alert-bg)' : 'inherit'};
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid var(--bs-alert-border-color);
  background-color: var(--bs-alert-bg);
  color: var(--bs-alert-color);
  position: relative;
`;

const Plus = styled(BsiPlus)`
  position: absolute;
  top: 0;
  right: -2px;
`;

const Wrapper = styled.div`
  padding-left: ${(props: { show: boolean }) => (props.show ? '50px' : 0)};
  position: relative;
`;

const Popover = styled(BSPopOver)``;

type HintType = {
  isBug?: boolean;
  isCorrect?: boolean;
  isWarning?: boolean;
  isAdvanced?: boolean;
};

const hint = ({ isBug, isCorrect, isWarning, isAdvanced }: HintType) => {
  const size = 20;

  if (isBug) {
    return {
      icon: (
        <>
          <BugFill size={size} title='Accessibility bug' />
          {isAdvanced ? <Plus size={size} title='advanced' /> : null}
        </>
      ),
      title: 'Accessibility bug',
      popOverClass: 'testing-alert-popover-warning',
      variant: 'warning',
    };
  }
  if (isCorrect) {
    return {
      icon: <CheckCircleFill size={size} title='Coded correctly' />,
      title: 'Correct',
      popOverClass: 'testing-alert-popover-success',
      variant: 'success',
    };
  }
  if (isWarning) {
    return {
      icon: (
        <>
          <ExclamationCircle size={size} title='Accessibility warning' />
          {isAdvanced ? <Plus size={size} title='advanced' /> : null}
        </>
      ),
      title: 'Accessibility warning',
      popOverClass: 'testingAlertPopOverSecondary',
      variant: 'secondary',
    };
  }
  return { icon: <></>, title: '', class: '' };
};

type Props = HintType & {
  popOver?: ReactElement | string;
  show?: boolean;
  id?: string;
  style?: React.CSSProperties;
  placement?: 'top' | 'bottom';
};

const TestingAlert: React.FC<PropsWithChildren<Props>> = ({
  isBug,
  isCorrect,
  isWarning,
  popOver,
  show,
  id,
  isAdvanced,
  style,
  children,
  placement = 'top',
}) => {
  const [showPopOver, setPopOver] = React.useState(false);
  const [target, setTarget] = React.useState(null);
  const headerRef = React.useRef(null);
  const wrapperRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setPopOver(false);
    }
    if (e.key === 'Tab' && popoverRef.current) {
      // @ts-ignore
      if (!popoverRef.current.contains(document.activeElement)) {
        setPopOver(false);
      }
    }
  };

  React.useEffect(() => {
    if (showPopOver) {
      window.addEventListener('keyup', handleKeyDown);
      if (headerRef.current !== null) {
        // @ts-ignore
        headerRef.current.focus({ preventScroll: true });
      }
    }

    if (!showPopOver) {
      window.removeEventListener('keyup', handleKeyDown);
      if (buttonRef.current) {
        // @ts-ignore
        buttonRef.current.focus();
      }
    }

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, [showPopOver]);

  if ((!isBug && !isCorrect && !isWarning) || !show) {
    return <div style={style}>{children}</div>;
  }
  const { icon, title, popOverClass, variant } = hint({
    isBug,
    isCorrect,
    isWarning,
    isAdvanced,
  });

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPopOver(!showPopOver);
    // @ts-ignore
    setTarget(event.target);
  };

  const popoverId = id ? id : 'a' + uuidv4();

  return (
    <Wrapper
      show={show}
      style={{ ...style, minHeight: '55px' }}
      ref={wrapperRef}
    >
      <Alert variant={variant} $hasPopOver={!!popOver}>
        {popOver ? (
          <>
            <Button
              onClick={(e) => handleClick(e)}
              ref={buttonRef}
              aria-controls={popoverId}
              aria-expanded={showPopOver ? 'true' : 'false'}
              aria-haspopup='true'
            >
              {icon}
            </Button>

            <Overlay
              show={showPopOver}
              target={target}
              container={wrapperRef}
              containerPadding={20}
              placement={placement}
              rootClose
              onHide={() => setPopOver(!showPopOver)}
            >
              <Popover className={popOverClass} id={popoverId}>
                <div ref={popoverRef}>
                  <Popover.Header style={{ position: 'relative' }}>
                    <span ref={headerRef} tabIndex={-1}>
                      {' '}
                      {title}
                    </span>{' '}
                    <CloseButton
                      style={{ position: 'absolute', right: '10px' }}
                      onClick={() => setPopOver(false)}
                    />
                  </Popover.Header>
                  <Popover.Body>{popOver}</Popover.Body>
                </div>
              </Popover>
            </Overlay>
          </>
        ) : (
          icon
        )}
      </Alert>

      {children}
    </Wrapper>
  );
};

export default TestingAlert;
