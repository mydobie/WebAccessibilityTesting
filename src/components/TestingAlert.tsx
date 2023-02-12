import React, { ReactElement, PropsWithChildren } from 'react';
import {
  BugFill,
  CheckCircleFill,
  ExclamationCircle,
} from 'react-bootstrap-icons';
import {
  Alert as BSAlert,
  // Button as BSButton,
  OverlayTrigger,
  Popover as BSPopOver,
} from 'react-bootstrap';

import styled from 'styled-components';
// import { useDispatch } from 'react-redux';

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
};

const hint = ({ isBug, isCorrect, isWarning }: HintType) => {
  const size = 20;

  if (isBug) {
    return {
      icon: <BugFill size={size} title='Accessibility bug' />,
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
      icon: <ExclamationCircle size={size} title='Accessibility warning' />,
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
  id: string;
  style?: React.CSSProperties;
};

const TestingAlert: React.FC<PropsWithChildren<Props>> = ({
  isBug,
  isCorrect,
  isWarning,
  popOver,
  show,
  id,
  style,
  children,
}) => {
  if ((!isBug && !isCorrect && !isWarning) || !show) {
    return <div style={style}>{children}</div>;
  }
  const { icon, title, popOverClass, variant } = hint({
    isBug,
    isCorrect,
    isWarning,
  });

  const popoverComponent = (
    <Popover className={popOverClass} id={id}>
      <Popover.Header as='h3'>{title}</Popover.Header>
      <Popover.Body>{popOver}</Popover.Body>
    </Popover>
  );

  return (
    <Wrapper show={show} style={style}>
      <Alert variant={variant} $hasPopOver={!!popOver}>
        {popOver ? (
          <OverlayTrigger
            trigger='click'
            placement='top'
            overlay={popoverComponent}
          >
            <Button>{icon}</Button>
          </OverlayTrigger>
        ) : (
          icon
        )}
      </Alert>

      {children}
    </Wrapper>
  );
};

export default TestingAlert;
